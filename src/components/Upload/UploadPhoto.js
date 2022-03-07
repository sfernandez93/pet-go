import { useContext } from "react";
import { UploadContext } from "../../context/UploadContext";

const UploadPhoto = () => {
  const { imagesToUpload, handleChangeImage, handleFirebaseUpload } =
    useContext(UploadContext);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label className="block text-sm font-medium text-gray-500"> Fotos </label>
      <div
        className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${
          imagesToUpload.length > 0 ? "bg-clear-blue" : "bg-gray-50"
        } `}
      >
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              for="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>
                {imagesToUpload.length > 0
                  ? `${imagesToUpload.length} foto(s) seleccionadas`
                  : "Selecciona una foto"}
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                multiple
                className="sr-only"
                onChange={handleChangeImage}
              ></input>
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};
export default UploadPhoto;
