import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import SearchButton from "./SearchButton";
import {
  FaHeart,
  FaSadTear,
  FaSistrix,
  FaPlus,
  FaUndo,
  FaGrinHearts,
  FaHeartBroken,
  FaTimes,
} from "react-icons/fa";

const SearchImage = () => {
  const {
    incrementIndexImage,
    decrementIndexImage,
    savePetAsFavorite,
    petsAllData,
    indexImages,
  } = useContext(SearchContext);

  return (
    <div className="w-11/12 h-4/5 overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 z-50 object-cover text-white">
      <NavLink
        className="h-full flex items-center justify-center"
        to={`/detail/${
          petsAllData && petsAllData.length > 0
            ? petsAllData[indexImages].uid
            : ""
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={
            petsAllData && petsAllData.length > 0
              ? petsAllData[indexImages].imagesUrl[
                  Object.keys(petsAllData[indexImages].imagesUrl)[0]
                ]
              : ""
          }
          alt="desktop"
        />
      </NavLink>
      <div className="w-full bg-transparent-black absolute p-5 flex flex-col">
        <span className="text-3xl font-normal">
          {petsAllData && petsAllData.length > 0
            ? petsAllData[indexImages].name
            : ""}
          <span className="text-lg text-gray-400">
            {" "}
            {petsAllData && petsAllData.length > 0
              ? petsAllData[indexImages].city
              : ""}
          </span>
        </span>
        <div className="flex p-5 items-center w-full justify-evenly">
          <SearchButton
            onClickFunction={incrementIndexImage}
            iconComponent={<FaUndo size={20} style={{ fill: "deepskyblue" }} />}
            sizeBorder={12}
            colorBorder={"deepskyblue"}
          ></SearchButton>

          <SearchButton
            onClickFunction={decrementIndexImage}
            iconComponent={<FaTimes size={30} style={{ fill: "chartreuse" }} />}
            sizeBorder={16}
            colorBorder={"chartreuse"}
          ></SearchButton>

          <SearchButton
            onClickFunction={savePetAsFavorite}
            iconComponent={<FaHeart size={30} style={{ fill: "hotpink" }} />}
            sizeBorder={16}
            colorBorder={"hotpink"}
          ></SearchButton>
        </div>
      </div>
    </div>
  );
};

export default SearchImage;
