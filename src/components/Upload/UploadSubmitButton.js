import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const UploadSubmitButton = () => {
  const { writeData } = useContext(UploadContext);

  return (
    <Link to={'/search'}>
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button
        onClick={writeData}
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Guardar
      </button>
    </div>
    </Link>
  );
};
export default UploadSubmitButton;
