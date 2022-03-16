import { createContext, useState, useRef, useEffect, useContext } from "react";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref as dbref, push, set } from "firebase/database";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export const UploadContext = createContext({});

const UploadContextProvider = ({ children }) => {
  const { getDataNotInFavorites } = useContext(SearchContext);

  const navigate = useNavigate();
  const storage = getStorage();

  const firstNameRef = useRef();
  const raceRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const detailsRef = useRef();
  const orgNameRef = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  // const postalCodeRef = useRef();
  const isDisabledRef = useRef();

  const [imagesToUpload, setImagesToUpload] = useState({});
  const [storeImageUrl, setStoreImageUrl] = useState("");
  const [uid, setUid] = useState("");
  const [numberFilesError, setNumberFilesError] = useState("");

  
  useEffect(() => {
    if (storeImageUrl) writePetImageDatabase(storeImageUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeImageUrl]);

  useEffect(() => {
    if (uid) uploadImagesFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const clearInputs = () => {
    firstNameRef.current.value = "";
    raceRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    detailsRef.current.value = "";
    cityRef.current.value = "";
    regionRef.current.value = "";
    orgNameRef.current.value = "";
    isDisabledRef.current.checked = false;
    setImagesToUpload({});
  };

  const handleChangeImage = (e) => {
    if (e.target.files.length < 6) {
      setNumberFilesError("");
      setImagesToUpload(e.target.files);
    } else {
      setNumberFilesError("Puedes subir un máximo de 6 fotos");
    }
  };

  const uploadImagesFirebase = () => {
    let i = 1;
    Object.keys(imagesToUpload).forEach((key) => {
      uploadImageFirebase(imagesToUpload[key], i++);
    });
  };

  const uploadImageFirebase = (image, index) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, `imagesToUpload/${uid}_${index}`);
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

  const writeData = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const id = uuid();
    writePetDatabase(db, id);
    setUid(id);
  };

  const writePetDatabase = (db, unique_id) => {
    set(dbref(db, "pets/" + unique_id), {
      name: firstNameRef.current.value,
      race: raceRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      details: detailsRef.current.value,
      city: cityRef.current.value,
      region: regionRef.current.value,
      orgName: orgNameRef.current.value,
      isDisabled: isDisabledRef.current.checked,
      dateUpload: Date.now()
    });
  };

  const writePetImageDatabase = (url) => {
    const db = getDatabase();
    const postListRef = dbref(db, "pets/" + uid + "/imagesUrl");
    const newPostRef = push(postListRef);
    set(newPostRef, url);
    getDataNotInFavorites();
    navigate("/search", { replace: true });
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
        orgNameRef,
        cityRef,
        regionRef,
        isDisabledRef,
        writeData,
        clearInputs,
        numberFilesError,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;
