import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DetailsContext } from "../../context/DetailsContext";
import { useContext } from "react";

const DetailsPhoto = ({ photo }) => {
  const { incrementIndexImage, decrementIndexImage, detailPet } =
    useContext(DetailsContext);

  return (
    <div className="relative">
      <img src={photo} className="rounded-t-lg object-center object-cover w-full h-72" />
      <button
        onClick={decrementIndexImage}
        className={`${detailPet && Object.keys(detailPet.imagesUrl).length < 2 ? "hidden": ""} carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0`}
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <FaChevronLeft size={40} style={{ fill: "aliceblue" }} />
      </button>
      <button
        onClick={incrementIndexImage}
        className={`${detailPet && Object.keys(detailPet.imagesUrl).length < 2 ? "hidden": ""} carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0`}
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <FaChevronRight size={40} style={{ fill: "aliceblue" }} />
      </button>
      {/* <img src="https://picsum.photos/500/300" className="rounded-t-lg" /> */}
    </div>
  );
};
export default DetailsPhoto;
