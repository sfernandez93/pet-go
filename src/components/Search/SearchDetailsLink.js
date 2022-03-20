import { FaRegListAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SearchDetailsLink = ({ dataPets, photoIndex }) => {
  return (
    <NavLink
      to={`/detail/${
        dataPets && dataPets.length > 0 && dataPets[photoIndex]
          ? dataPets[photoIndex].uid
          : ""
      }`}
    >
      <FaRegListAlt size={20} style={{ fill: "gainsboro" }} />
    </NavLink>
  );
};

export default SearchDetailsLink;
