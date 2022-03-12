import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaHeart, FaSadTear } from "react-icons/fa";
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
    <div className = "h-full w-full flex items-center justify-center">
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
