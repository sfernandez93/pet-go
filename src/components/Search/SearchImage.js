import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { FaHeart, FaReply, FaMapMarkerAlt, FaForward } from "react-icons/fa";

const SearchImage = () => {
  const {
    incrementIndexImage,
    decrementIndexImage,
    savePetAsFavorite,
    petsAllData,
    indexImages,
  } = useContext(SearchContext);

  return (
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="flex flex-col justify-between h-4/5 w-11/12 bg-white rounded-lg shadow-lg">
        <div class="flex items-center mt-2 space-x-4">
          <div class="flex items-center pl-4">
            <FaMapMarkerAlt size={20} style={{ fill: "gray" }} />
            <p class="p-4 pl-2 text-sm font-normal text-gray-300 mr-14 hover:underline">
              {petsAllData && petsAllData.length > 0
                ? petsAllData[indexImages].city
                : ""}{" "}
              (publicado hace 2 horas)
            </p>
          </div>
        </div>
        <img
          class="w-full h-4/5 object-cover"
          src="https://images.squarespace-cdn.com/content/v1/5d32b4cc78a42600019361c7/1563607085560-ESTYI12MMFIGQ2ZBYHMH/Pepper-Westie-West-Highland-White-Terrier-10.jpg"
          //       src={
          //         petsAllData && petsAllData.length > 0
          //           ? petsAllData[indexImages].imagesUrl[
          //               Object.keys(petsAllData[indexImages].imagesUrl)[0]
          //             ]
          //           : ""
          //       }
          alt=""
        />
        <div class="flex justify-between px-10 py-6">
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
