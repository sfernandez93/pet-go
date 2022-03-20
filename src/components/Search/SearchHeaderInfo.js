import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchHeaderInfo = () => {
  const { dataPets, photoIndex } = useContext(SearchContext);

  return (
    <div className="flex items-center pl-4">
      <FaMapMarkerAlt size={20} style={{ fill: "gainsboro" }} />
      <p className="p-4 pl-2 text-xs font-normal text-gray-300">
        {dataPets && dataPets.length > 0 && dataPets[photoIndex]
          ? dataPets[photoIndex].city +
            dataPets[photoIndex].timeElapsedSincePublication
          : ""}
      </p>
    </div>
  );
};

export default SearchHeaderInfo;
