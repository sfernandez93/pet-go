import { useContext } from "react";
import { UploadContext } from "../../context/UploadContext";

const UploadInput = ({
  inputTitle,
  inputName,
  inputType,
  inputAutocomplete,
}) => {
  const { formValues, handleChange } = useContext(UploadContext);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor={inputName}
        className="block text-sm font-medium text-gray-500"
      >
        {inputTitle}
      </label>
      <input
        defaultValue={formValues.value}
        onChange={handleChange}
        type={inputType}
        name={inputName}
        id={inputName}
        autoComplete={inputAutocomplete}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      ></input>
    </div>
  );
};
export default UploadInput;
