import { useContext } from "react";
import { UploadContext } from "../../context/UploadContext";
import { SearchContext } from "../../context/SearchContext";

const SearchAdvancedSelector = ({ selectorTitle, selectorName }) => {
  const { provinces } = useContext(UploadContext);
  const { formValues } = useContext(UploadContext);
  const { handleChange } = useContext(SearchContext);

  return (
      <select
        defaultValue={formValues.value}
        onChange={handleChange}
        name={selectorName}
        className="w-4/6 border h-10 rounded-full pl-4 text-gray-300 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
        aria-label="Default select example"
      >
        <option
          className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
          defaultValue
          value="0"
        >Selecciona una provincia</option>
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
  );
};
export default SearchAdvancedSelector;
