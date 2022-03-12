import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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
      class="overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-76 h-106 z-50 object-cover text-white">
      <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="desktop" />
      <div class="absolute p-3 flex flex-col">
        <span>shop the collection</span>
        <span class="font-semibold capitalize" >mens</span>
      </div>
    </div>
  );
};

export default SearchImage;
