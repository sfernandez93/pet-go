import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const SearchTitlePhoto = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  return (
    <NavLink
      to={petsAllData.length > 0 ? `detail/${petsAllData[indexImages].id}` : ""}
    >
      {" "}
      Detail
      <p className="text-2xl font-semibold text-gray-900 p-4">
        {petsAllData.length > 0
          ? `${petsAllData[indexImages].name}, ${petsAllData[indexImages].age}`
          : ""}
      </p>
    </NavLink>
  );
};

export default SearchTitlePhoto;
