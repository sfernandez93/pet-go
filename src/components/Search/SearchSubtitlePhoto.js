import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchSubtitlePhoto = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  return (
    <div className="pl-4 text-sm text-gray-500">
      <a href="#">
        <span className="absolute inset-0"></span>
        {petsAllData.length > 0 ? petsAllData[indexImages].city : ""}
      </a>
    </div>
  );
};
export default SearchSubtitlePhoto;
