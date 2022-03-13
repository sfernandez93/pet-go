import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";
import { FaHeart, FaSadTear, FaSistrix, FaPlus, FaUndo, FaGrinHearts } from "react-icons/fa";

const SearchImage = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  console.log(
    petsAllData && petsAllData.length > 0 ? petsAllData[indexImages].uid : ""
  );
  return (
    // <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    //   <img
    //     src={
    //       petsAllData && petsAllData.length > 0
    //         ? petsAllData[indexImages].imagesUrl[
    //             Object.keys(petsAllData[indexImages].imagesUrl)[0]
    //           ]
    //         : ""
    //     }
    //     // "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
    //     alt="Collection of four insulated travel bottles on wooden shelf."
    //     className="w-full h-full object-center object-cover"
    //   ></img>
    // </div>
    <div className="w-11/12 h-4/5 overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 z-50 object-cover text-white">
      <img
        className="w-full h-full object-cover"
        src="https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg"
        alt="desktop"
      />
      <div className="w-full bg-transparent-black absolute p-5 flex flex-col">
        <span className= "text-3xl font-normal">Ron <span className="text-lg text-gray-400">Madrid</span></span>
        {/* <span className="capitalize" >Madrid</span> */}
        <div class="flex pt-15 items-center w-full justify-evenly">
          <div
            className="w-12 h-12 border-solid border-2 border-deepskyblue rounded-full flex items-center justify-center"
            to={"/search"}
          >
            <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <FaUndo size={20} style={{ fill: "deepskyblue" }} />
            </div>
          </div>
          <div
            className="w-16 h-16 border-solid border-2 border-chartreuse rounded-full flex items-center justify-center"
            to={"/upload"}
          >
            <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <FaSadTear size={30} style={{ fill: "chartreuse" }} />
            </div>
          </div>

          <div
            className="w-16 h-16 border-solid border-2 border-hotpink rounded-full flex items-center justify-center"
            to={"/favorites"}
          >
            <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <FaGrinHearts size={30} style={{ fill: "hotpink" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchImage;
