import { createContext, useState, useRef, useEffect } from "react";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref as dbref, push, set  } from "firebase/database";
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
  const [storeImageUrl, setStoreImageUrl] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    if (storeImageUrl) writePetImageDatabase(storeImageUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeImageUrl]);

  useEffect(() => {
    if (uid) uploadImagesFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const clearInputs = () => {
    firstNameRef.current.value = ''
    raceRef.current.value =  ''
    ageRef.current.value =  ''
    emailRef.current.value =  ''
    phoneRef.current.value =  ''
    detailsRef.current.value =  ''
    streetAdressRef.current.value =  ''
    cityRef.current.value =  ''
    regionRef.current.value =  ''
    postalCodeRef.current.value =  ''
    isDisabledRef.current.checked = false
    setImagesToUpload({})
  }

  const handleChangeImage = (e) => {
    setImagesToUpload(e.target.files);
  };

  const uploadImagesFirebase = () => {
    Object.keys(imagesToUpload).forEach((key) => {
      uploadImageFirebase(imagesToUpload[key]);
    });
  };

  const uploadImageFirebase = (image) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, `imagesToUpload/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

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
          console.log("File available at", downloadURL);
          setStoreImageUrl(downloadURL);
        });
      }
    );
  };

  const writeData = async () => {
    const db = getDatabase();
    const id = uuid();
    await writePetDatabase(db, id);
    setUid(id);
  };

  const writePetImageDatabase =  (url) => {
    const db = getDatabase();
    const postListRef = dbref(db, "petImages/" + uid);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      url: url,
    });
    clearInputs();
  };

  const writePetDatabase = async (db, unique_id) => {
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

  return (
    <UploadContext.Provider
      value={{
        imagesToUpload,
        setImagesToUpload,
        handleChangeImage,
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
