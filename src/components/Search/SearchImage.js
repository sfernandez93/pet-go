import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchImage = () => {
  const { indexImages, petsAllData } = useContext(SearchContext);

  return (
    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <img
        src={
          petsAllData.length > 0 ? petsAllData[indexImages].profileImage : ""
        }
        // "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
        alt="Collection of four insulated travel bottles on wooden shelf."
        className="w-full h-full object-center object-cover"
      ></img>
    </div>
  );
};

export default SearchImage;
