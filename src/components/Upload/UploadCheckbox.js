import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";

const UploadCheckbox = ({
  inputTitle,
  inputName,
  inputDescription,
  handleChange,
  textColor,
  textColorDescription
}) => {
  const { formValues } = useContext(UploadContext);

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
          data-cy={inputName}
        ></input>
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="is_disabled" className={`font-medium text-${textColor}`}>
          {inputTitle}
        </label>
        <p className={`text-${textColorDescription}`}>{inputDescription}</p>
      </div>
    </div>
  );
};
export default UploadCheckbox;
