import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { FaHeart, FaRegListAlt, FaMapMarkerAlt, FaForward } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SearchImage = () => {
  const {
    incrementIndexImage,
    savePetAsFavorite,
    dataPets,
    photoIndex,
  } = useContext(SearchContext);

  const isElapsetToday = dataPets && dataPets.length > 0 && dataPets[photoIndex].daysElapsedSincePublication > 0 ? false: true;
  const daysElapsedSincePublication = `${isElapsetToday ? ' (publicado hoy)': ' (publicado hace ' + dataPets[photoIndex].daysElapsedSincePublication + ' día(s))'}`;

  return(
    dataPets && dataPets.length > 0 ? 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col justify-between h-4/5 w-11/12 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center pl-4">
            <FaMapMarkerAlt size={20} style={{ fill: "gray" }} />
            <p className="p-4 pl-2 text-sm font-normal text-gray-300 mr-14 hover:underline">
            {
                  dataPets && dataPets.length > 0 && dataPets[photoIndex]
                    ? dataPets[photoIndex].city + daysElapsedSincePublication
                      
                    : ""
                } 
            </p>
          </div>
        </div>
        
        <img
          className="w-full h-4/5 object-cover"
                src={
                  dataPets && dataPets.length > 0 && dataPets[photoIndex]
                    ? dataPets[photoIndex].imagesUrl[
                        Object.keys(dataPets[photoIndex].imagesUrl)[0]
                      ]
                    : ""
                }
          alt=""
        />
        <div className="flex justify-between px-10 py-6">
          <NavLink to={`/detail/${
              dataPets && dataPets.length > 0 && dataPets[photoIndex]
                ? dataPets[photoIndex].uid
                : ""
            }`}>
            <FaRegListAlt size={20} style={{ fill: "grey" }} />
          </NavLink>
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
  : <div></div>
  )
};

export default SearchImage;
