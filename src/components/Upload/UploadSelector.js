import { useContext } from "react";
import { UploadContext } from "../../context/UploadContext";

const UploadSelector = ({ selectorTitle, selectorName }) => {
  const { provinces } = useContext(UploadContext);
  const { formValues, handleChange } = useContext(UploadContext);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="provincia"
        className="block text-xs font-medium text-gray-500"
      >
        {selectorTitle}
      </label>
      <select
        defaultValue={formValues.value}
        onChange={handleChange}
        name={selectorName}
        className="mt-1 block bg-white w-full shadow-sm text-xs text-gray-300 rounded-md"
        aria-label="Default select example"
        data-cy={selectorName}
      >
        <option
          className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
          defaultValue
        ></option>
        {[...Object.keys(provinces)].map((key) => (
          <option
            key={key}
            className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
            value={key}
          >
            {provinces[key].name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default UploadSelector;
