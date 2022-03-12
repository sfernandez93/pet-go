import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaHeart, FaSadTear, FaSistrix, FaPlus } from "react-icons/fa";
import SearchPhoto from "../components/Search/SearchPhoto";
import SearchButton from "../components/Search/SearchButton";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const Searchpet = () => {
  const {
    getDataFromPetsDatabase,
    incrementIndexImage,
    savePetAsFavorite,
    petsAllData,
    indexImages,
  } = useContext(SearchContext);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <LogoIconBar></LogoIconBar>
      <NavLink
        to={`/detail/${
          petsAllData && petsAllData.length > 0
            ? petsAllData[indexImages].uid
            : ""
        }`}
      >
        <SearchPhoto></SearchPhoto>
      </NavLink>
      <div class="flex items-center w-full justify-evenly p-6">
        <div
          className="w-12 h-12 border-solid border-2 rounded-full flex items-center justify-center"
          to={"/search"}
        >
          <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <FaSistrix size={20} style={{ fill: "grey" }} />
          </div>
        </div>
        <div
          className="w-14 h-14 border-solid border-2 rounded-full flex items-center justify-center"
          to={"/upload"}
        >
          <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <FaSadTear size={30} style={{ fill: "grey" }} />
          </div>
        </div>

        <div
          className="w-14 h-14 border-solid border-2 rounded-full flex items-center justify-center"
          to={"/favorites"}
        >
          <div class="text-gray-300 hover:bg-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <FaHeart size={30} style={{ fill: "pink" }} />
          </div>
        </div>
      </div>
      {/* <div className="p-4 flex justify-center">
        <SearchButton
          onClickFunction={incrementIndexImage}
          iconComponent={<FaSadTear size={50} style={{ fill: "black" }} />}
        ></SearchButton>
        <SearchButton
          onClickFunction={savePetAsFavorite}
          iconComponent={<FaHeart size={50} style={{ fill: "white" }} />}
        ></SearchButton>
      </div> */}
      <NavBar></NavBar>
    </div>
  );
};
export default Searchpet;
