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
      className="text-xs w-4/6 border h-10 rounded-full pl-4 text-gray-300 mt-1 block w-full"
      aria-label="Default select example"
    >
      <option
        className="block text-xs font-medium text-gray-600 inset-y-0 right-0 flex items-center pr-4"
        defaultValue
        value="0"
      >
        Selecciona una provincia
      </option>
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
  );
};
export default SearchAdvancedSelector;
