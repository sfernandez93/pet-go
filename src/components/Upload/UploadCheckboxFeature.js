import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";

const UploadCheckboxFeature = ({ inputTitle, inputName, onChangeFunction, textColor }) => {
  const { formValues } = useContext(UploadContext);

  return (
    <label
      htmlFor={inputName}
      className={`flex justify-center items-center relative flex-inline items-center isolate p-2 rounded-2xl font-normal text-${textColor} text-xs`}
    >
      <input
        defaultValue={formValues.value}
        onChange={onChangeFunction}
        id={inputName}
        name={inputName}
        type="checkbox"
        hidden
        className="relative peer z-20 text-purple-600 rounded-md focus:ring-0"
        data-cy={inputName}
      />
      <span className="relative z-20 text-center">{inputTitle}</span>
      <div className="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
    </label>
  );
};
export default UploadCheckboxFeature;
