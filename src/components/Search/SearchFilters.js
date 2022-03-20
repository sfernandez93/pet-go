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
      className="absolute flex flex-col items-center w-full mt-24 p-4 shadow rounded bg-transparentbg z-20"
    >
      <SearchAdvancedSelector
        selectorTitle="Provincia"
        selectorName="region"
      ></SearchAdvancedSelector>
      <UploadFeatures handleChange={handleChange}></UploadFeatures>

      <UploadCheckbox
        handleChange={handleChange}
        inputTitle="Modo ayúdame"
        inputName="is_disabled"
        inputDescription="Adopta mascotas con algún tipo de necesidad especial. ¡Te lo agradecerán!"
      ></UploadCheckbox>

      <SearchFiltersButton></SearchFiltersButton>
    </form>
  );
};

export default SearchFilters;
