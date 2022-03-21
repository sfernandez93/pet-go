import UploadFeatures from "../Upload/UploadFeatures";
import UploadCheckbox from "../Upload/UploadCheckbox";
import SearchAdvancedSelector from "../Search/SearchAdvancedSelector";
import SearchFiltersButton from "../Search/SearchFiltersButton";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchFilters = () => {
  const { getDataFiltered } = useContext(SearchContext);
  const { handleChange } = useContext(SearchContext);

  return (
    <form
      onSubmit={getDataFiltered}
      className="absolute flex flex-col items-center w-full mt-20 p-4 shadow rounded bg-transparentbg z-20"
    >
      <SearchAdvancedSelector
        selectorTitle="Provincia"
        selectorName="region"
      ></SearchAdvancedSelector>
      <UploadFeatures
        handleChange={handleChange}
        textColor="gray-300"
      ></UploadFeatures>

      <UploadCheckbox
        handleChange={handleChange}
        inputTitle="Modo ayuda"
        inputName="is_disabled"
        inputDescription="Adopta mascotas con algún tipo de necesidad especial. ¡Te lo agradecerán!"
        textColor="gray-400"
        textColorDescription="gray-300"
      ></UploadCheckbox>

      <SearchFiltersButton></SearchFiltersButton>
    </form>
  );
};

export default SearchFilters;
