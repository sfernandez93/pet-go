import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import SearchHelpMe from "./SearchHelpMe";
import SearchHeaderInfo from "./SearchHeaderInfo";

const SearchHeaderImage = () => {
  const { dataPets, photoIndex } = useContext(SearchContext);

  return (
    <div className="flex items-center justify-between mt-2">
      <SearchHeaderInfo></SearchHeaderInfo>
      {dataPets &&
      dataPets.length > 0 &&
      dataPets[photoIndex] &&
      dataPets[photoIndex].isDisabled ? (
        <SearchHelpMe />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchHeaderImage;
