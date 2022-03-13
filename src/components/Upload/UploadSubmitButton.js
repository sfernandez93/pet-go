import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";

const UploadSubmitButton = () => {
  const { writeData } = useContext(UploadContext);

  return (
    <div className="bg-white mb-16 px-4 py-3 text-right sm:px-6">
      <button
        onClick={writeData}
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-marine-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Guardar
      </button>
    </div>
  );
};
export default UploadSubmitButton;
