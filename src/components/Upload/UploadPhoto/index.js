import { useState } from "react";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const UploadPhoto = () => {
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
    <div className="flex justify-center mt-8">
      <div
        className={`max-w-2xl rounded-lg shadow-xl ${
          imagesToUpload.length > 0 ? "bg-clear-blue" : "bg-gray-50"
        }`}
      >
        <div className="m-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  {imagesToUpload.length > 0
                    ? `${imagesToUpload.length} foto(s) seleccionadas`
                    : "Selecciona una foto"}
                </p>
              </div>
              <input
                type="file"
                multiple
                className="opacity-0"
                onChange={handleChangeImage}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center p-2">
          {/* <button
            className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl"
            onClick={handleFirebaseUpload}
          >
            Create
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default UploadPhoto;
