import { createContext, useState, useRef, useEffect, useContext } from "react";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  ref as dbref,
  push,
  set,
  get,
  child,
} from "firebase/database";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";

export const UploadContext = createContext({});

const UploadContextProvider = ({ children }) => {
  const { getDataNotInFavorites } = useContext(SearchContext);

  const navigate = useNavigate();
  const storage = getStorage();

  const [imagesToUpload, setImagesToUpload] = useState({});
  const [storeImageUrl, setStoreImageUrl] = useState("");
  const [uid, setUid] = useState("");
  const [numberFilesError, setNumberFilesError] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    getProvinces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  useEffect(() => {
    if (storeImageUrl) writePetImageDatabase(storeImageUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeImageUrl]);

  useEffect(() => {
    if (uid) uploadImagesFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  const clearInputs = () => {
    // firstNameRef.current.value = "";
    // raceRef.current.value = "";
    // ageRef.current.value = "";
    // emailRef.current.value = "";
    // phoneRef.current.value = "";
    // detailsRef.current.value = "";
    // cityRef.current.value = "";
    // regionRef.current.value = "";
    // orgNameRef.current.value = "";
    // isDisabledRef.current.checked = false;
    setImagesToUpload({});
  };

  const getProvinces = async () => {
    const db = getDatabase();
    const dbRef = dbref(db);
    const provinces = [];

    try {
      const snapshot = await get(child(dbRef, "provincias/"));
      if (snapshot.exists()) {
        Object.keys(snapshot.val()).forEach((key) => {
          provinces.push(snapshot.val()[key].name);
        });
        provinces.sort(function (a, b) {
          return a.localeCompare(b);
        });
        setProvinces(provinces);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
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

  const handleChange = (event) => {
    let newObject = {};
    newObject[event.target.name] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      ...newObject,
    }));
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
      name: formValues["first-name"],
      race: formValues["race"],
      age: formValues["age"],
      email: formValues["email-address"],
      phone: formValues["phone"],
      details: formValues["about"],
      city: formValues["city"],
      region: formValues["region"],
      orgName: formValues["org-name"],
      isDisabled: formValues["is_disabled"] ? true : false,
      isActive: formValues["is_active"] ? true : false,
      isBig: formValues["is_big"] ? true : false,
      isDocile: formValues["is_docile"] ? true : false,
      isGuide: formValues["is_guide"] ? true : false,
      isLoving: formValues["is_loving"] ? true : false,
      isNotAlergic: formValues["is_notalergic"] ? true : false,
      isPlayful: formValues["is_playful"] ? true : false,
      isQuiet: formValues["is_quiet"] ? true : false,
      isSmall: formValues["is_small"] ? true : false,
      isSociable: formValues["is_sociable"] ? true : false,
      isTrainable: formValues["is_trainable"] ? true : false,
      dateUpload: Date.now(),
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
        writeData,
        clearInputs,
        numberFilesError,
        provinces,
        formValues,
        handleChange,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;
