import { createContext, useState } from "react";
import { ref } from "firebase/database";

import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const UploadContext = createContext({});

const UploadContextProvider = ({ children }) => {
  const storage = getStorage();
  const [imagesToUpload, setImagesToUpload] = useState({});

  const handleChangeImage = (e) => {
    setImagesToUpload(e.target.files);
  };

  const handleFirebaseUpload = (e) => {
    Object.keys(imagesToUpload).forEach((key) => {
      uploadImageFirebase(imagesToUpload[key]);
    });
  };

  const uploadImageFirebase = (image) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, `imagesToUpload/${image.name}`);
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
        });
        setImagesToUpload({});
      }
    );
  };

  return (
    <UploadContext.Provider
      value={{
        imagesToUpload,
        setImagesToUpload,
        handleChangeImage,
        handleFirebaseUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;
