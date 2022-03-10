import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchTitlePhoto = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  return (
    <p className="text-2xl font-semibold text-gray-900 p-4">
      {petsAllData.length > 0
        ? `${petsAllData[indexImages].name}, ${petsAllData[indexImages].age}`
        : ""}
    </p>
  );
};

export default SearchTitlePhoto;
