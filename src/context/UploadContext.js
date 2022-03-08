import { createContext, useState, useRef } from "react";
import { set, ref as dbref } from "firebase/database";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase } from "firebase/database";
import { v4 as uuid } from "uuid";

export const UploadContext = createContext({});

const UploadContextProvider = ({ children }) => {
  const firstNameRef = useRef();
  const raceRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const detailsRef = useRef();
  const streetAdressRef = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  const postalCodeRef = useRef();
  const isDisabledRef = useRef();

  const storage = getStorage();
  const [imagesToUpload, setImagesToUpload] = useState({});
  const [storeImageUrl, setStoreImageUrl] = useState([]);

  const handleChangeImage = (e) => {
    setImagesToUpload(e.target.files);
  };

  const handleFirebaseUpload = (e) => {
    Object.keys(imagesToUpload).forEach((key) => {
      uploadImageFirebase(imagesToUpload[key]);
    });
  };

  const uploadImageFirebase = (image) => {
    const urlArray = [];
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, `imagesToUpload/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    console.log("HEHEHE");
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          urlArray.push(downloadURL);
        });
        setStoreImageUrl(urlArray);
        setImagesToUpload({});
      }
    );
  };

  const writeData = async () => {
    const db = getDatabase();
    const unique_id = uuid();

    console.log(storeImageUrl);

    await handleFirebaseUpload();
    console.log(storeImageUrl);

    await writePetData(db, unique_id);
    console.log(storeImageUrl);
    await writePetImagesData(db, unique_id);
  };

  const writePetData = async (db, unique_id) => {
    set(dbref(db, "pets/" + unique_id), {
      name: firstNameRef.current.value,
      race: raceRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      details: detailsRef.current.value,
      street: streetAdressRef.current.value,
      city: cityRef.current.value,
      region: regionRef.current.value,
      postalCode: postalCodeRef.current.value,
      isDisabled: isDisabledRef.current.checked,
    });
  };

  const writePetImagesData = (db, unique_id) => {
    console.log(storeImageUrl);
    storeImageUrl.forEach(i => {
      set(dbref(db, "petImages/" + unique_id), {
        url: i,
      });
    });
  };

  return (
    <UploadContext.Provider
      value={{
        imagesToUpload,
        setImagesToUpload,
        handleChangeImage,
        handleFirebaseUpload,
        firstNameRef,
        raceRef,
        ageRef,
        emailRef,
        phoneRef,
        detailsRef,
        streetAdressRef,
        cityRef,
        regionRef,
        postalCodeRef,
        isDisabledRef,
        writeData,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;
