import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const SearchTitlePhoto = () => {
  const { photoIndex, dataPets } = useContext(SearchContext);

  return (
    <NavLink
      to={dataPets.length > 0 ? `detail/${dataPets[photoIndex].id}` : ""}
    >
      {" "}
      Detail
      <p className="text-2xl font-semibold text-gray-900 p-4">
        {dataPets.length > 0
          ? `${dataPets[photoIndex].name}, ${dataPets[photoIndex].age}`
          : ""}
      </p>
    </NavLink>
  );
};

export default SearchTitlePhoto;
