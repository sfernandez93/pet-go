import { SearchContext } from "../../context/SearchContext";
import { useContext, useEffect } from "react";
import SearchImageButtons from "./SearchImageButtons";
import SearchPhotoContainer from "./SearchPhotoContainer";
import SearchHeaderImage from "./SearchHeaderImage";

const SearchImage = () => {
  const {
    dataPets,
    photoIndex,
    setPhotoIndex,
    getData,
    isFinish,
    setIsFinish,
  } = useContext(SearchContext);

  useEffect(() => {
    setPhotoIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFinish) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinish]);

  useEffect(() => {
    if (photoIndex && photoIndex > dataPets.length - 1) {
      setPhotoIndex(0);
      setIsFinish(true);
    }
  });

  return dataPets && dataPets.length > 0 && dataPets[photoIndex] ? (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
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
