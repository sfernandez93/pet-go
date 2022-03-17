import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SearchFilters from "./SearchFilters";
import SearchAdvancedButton from "./SearchAdvancedButton";

const SearchAdvanced = () => {
  const { isAdvancedSearch } = useContext(SearchContext);

  return (
    <div className="w-full absolute top-0">
      <SearchAdvancedButton></SearchAdvancedButton>
      {isAdvancedSearch ? <SearchFilters></SearchFilters> : <div></div>}
    </div>
  );
};

export default SearchAdvanced;
