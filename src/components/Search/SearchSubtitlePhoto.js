import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchSubtitlePhoto = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  return (
    <div className="pl-4 text-sm text-gray-500">
      <div>
        <span className="absolute inset-0"></span>
        {petsAllData.length > 0 ? petsAllData[indexImages].city : ""}
      </div>
    </div>
  );
};
export default SearchSubtitlePhoto;
