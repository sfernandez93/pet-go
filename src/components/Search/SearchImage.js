import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton"
import { FaHeart, FaSadTear, FaSistrix, FaPlus } from "react-icons/fa";

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
      <div
      className="w-11/12 h-4/5 overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 z-50 object-cover text-white">
      <img className="w-full h-full object-cover" src="https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg" alt="desktop" />
      <div className="w-full bg-transparent-black absolute p-5 flex flex-col">
        <span className= "text-3xl font-normal">Ron <span className="text-lg text-gray-400">3</span></span>
        <span className="capitalize" >Madrid</span>
      </div>
    </div>
  );
};

export default SearchImage;
