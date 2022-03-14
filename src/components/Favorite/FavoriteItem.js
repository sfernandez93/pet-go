import { FaTimes } from "react-icons/fa";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const FavoriteItem = ({ urlImage, petUid }) => {
  const { deleteByUid } = useContext(FavoriteContext);

  const handleDetele = () => {
    deleteByUid(petUid);
  };

  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="relative w-full h-40">
        <button className="absolute m-2 right-0" onClick={handleDetele}>
          <FaTimes size={20} style={{ fill: "white" }} />
        </button>
        <NavLink
          to={`/detail/${petUid}`}
          className="w-full carousel-control-prev absolute h-32	bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        ></NavLink>
        <img
          className="object-center object-cover w-full h-full"
          src={urlImage}
          alt="photo"
        ></img>
      </div>
    </div>
  );
};
export default FavoriteItem;
