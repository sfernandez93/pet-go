import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchSubtitlePhoto = () => {
  const { photoIndex, dataPets } = useContext(SearchContext);

  return (
    <div className="pl-4 text-sm text-gray-500">
      <div>
        <span className="absolute inset-0"></span>
        {dataPets.length > 0 ? dataPets[photoIndex].city : ""}
      </div>
    </div>
  );
};
export default SearchSubtitlePhoto;
