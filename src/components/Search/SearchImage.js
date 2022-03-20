import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import SearchImageButtons from "./SearchImageButtons";
import SearchPhotoContainer from "./SearchPhotoContainer";
import SearchHeaderImage from "./SearchHeaderImage";

const SearchImage = () => {
  const { dataPets, photoIndex } = useContext(SearchContext);

  return dataPets && dataPets.length > 0 && dataPets[photoIndex] ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-between h-3/4 w-10/12 sm:w-2/6 sm:h-3/4 bg-white rounded-lg shadow-lg">
        <SearchHeaderImage></SearchHeaderImage>
        <SearchPhotoContainer></SearchPhotoContainer>
        <SearchImageButtons></SearchImageButtons>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SearchImage;
