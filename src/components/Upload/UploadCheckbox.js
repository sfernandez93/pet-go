import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";

const UploadCheckbox = ({
  inputTitle,
  inputName,
  inputDescription,
}) => {
  const { formValues, handleChange } = useContext(UploadContext);

  return (
    <div className="flex items-start col-span-6 sm:col-span-3 lg:col-span-2 ">
      <div className="flex items-center h-5">
        <input
          defaultValue={formValues.value}
          onChange={handleChange}
          id={inputName}
          name={inputName}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        ></input>
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="is_disabled" className="font-medium text-gray-700">
          {inputTitle}
        </label>
        <p className="text-gray-500">{inputDescription}</p>
      </div>
    </div>
  );
};
export default UploadCheckbox;
