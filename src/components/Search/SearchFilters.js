import UploadFeatures from "../Upload/UploadFeatures";
import SearchAdvancedSelector from "../Search/SearchAdvancedSelector";
import SearchFiltersButton from "../Search/SearchFiltersButton";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const SearchFilters = () => {
  
  const { getDataFiltered } = useContext(SearchContext);
  const { handleChange } = useContext(SearchContext);

  return (
    <form onSubmit={getDataFiltered} className="absolute flex flex-col items-center w-full mt-24 p-4 shadow rounded bg-transparentbg ">
      <SearchAdvancedSelector
        selectorTitle="Provincia"
        selectorName="region"
      ></SearchAdvancedSelector>
      <UploadFeatures handleChange={handleChange} ></UploadFeatures>
      <SearchFiltersButton></SearchFiltersButton>
      </form>
  );
};

export default SearchFilters;
