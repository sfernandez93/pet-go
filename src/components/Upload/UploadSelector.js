import { useContext } from "react";
import { UploadContext } from "../../context/UploadContext";

const UploadSelector = ({ selectorTitle, selectorName }) => {
  const { provinces } = useContext(UploadContext);
  const { formValues, handleChange } = useContext(UploadContext);

  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="provincia"
        className="block text-sm font-medium text-gray-500"
      >
        {selectorTitle}
      </label>
      <select
        defaultValue={formValues.value}
        onChange={handleChange}
        name={selectorName}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        aria-label="Default select example"
      >
        <option
          className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
          defaultValue
        ></option>
        {[...provinces].map((key, i) => (
          <option
            key={i}
            className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
            value={key}
          >
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
export default UploadSelector;
