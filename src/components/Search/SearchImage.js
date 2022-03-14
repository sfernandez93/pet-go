import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { FaHeart, FaReply, FaMapMarkerAlt, FaForward } from "react-icons/fa";

const SearchImage = () => {
  const {
    incrementIndexImage,
    decrementIndexImage,
    savePetAsFavorite,
    dataPets,
    photoIndex,
  } = useContext(SearchContext);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col justify-between h-4/5 w-11/12 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center pl-4">
            <FaMapMarkerAlt size={20} style={{ fill: "gray" }} />
            <p className="p-4 pl-2 text-sm font-normal text-gray-300 mr-14 hover:underline">
              {dataPets && dataPets.length > 0
                ? dataPets[photoIndex].city
                : ""}{" "}
              (publicado hace 2 horas)
            </p>
          </div>
        </div>
        <img
          className="w-full h-4/5 object-cover"
                src={
                  dataPets && dataPets.length > 0
                    ? dataPets[photoIndex].imagesUrl[
                        Object.keys(dataPets[photoIndex].imagesUrl)[0]
                      ]
                    : ""
                }
          alt=""
        />
        <div className="flex justify-between px-10 py-6">
          <button onClick={decrementIndexImage}>
            <FaReply size={20} style={{ fill: "grey" }} />
          </button>
          <button onClick={incrementIndexImage}>
            <FaForward size={20} style={{ fill: "grey" }} />
          </button>
          <button onClick={savePetAsFavorite}>
            <FaHeart
              size={20}
              style={{ fill: "red" }}
              className=" hover:shadow-2xl transition duration-200 transform hover:scale-150 cursor-pointers"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchImage;
