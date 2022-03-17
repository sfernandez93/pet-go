import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DetailsContext } from "../../context/DetailsContext";
import { useContext } from "react";

const DetailsProfilePhoto = ({ photo }) => {

  return (
    <div className="relative flex justify-center">
    <img
      src="https://picsum.photos/50/50"
      className="rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center"
    />
  </div>
  );
};
export default DetailsProfilePhoto;
