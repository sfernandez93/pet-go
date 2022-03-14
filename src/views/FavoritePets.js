import { FavoriteContext } from "../context/FavoriteContext";
import { SearchContext } from "../context/SearchContext";
import { useContext, useEffect } from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const FavoritePets = () => {
  const { getDataFavoritesFromDatabase, urlImages } =
    useContext(FavoriteContext);

  const { petsAllData, getDataFromPetsDatabase } =
    useContext(SearchContext);

  useEffect(() => {
    if (urlImages.length < 1) getDataFavoritesFromDatabase();
    if (petsAllData.length < 1) getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LogoIconBar></LogoIconBar>
      <div className="mt-16 mb-16 max-w-2xl mx-auto pt-8 pb-16 max-w-7xl px-4">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-3">
          {[...petsAllData].map((url, i) => (
            <NavLink
              key={i}
              to={`/detail/${
                petsAllData && petsAllData.length > 0
                  ? petsAllData[i].uid
                  : ""
              }`}
            >
              <FavoriteItem key={i} urlImage={petsAllData && petsAllData.length > 0
                  ? petsAllData[i].imagesUrl[Object.keys(petsAllData[i].imagesUrl)[0]]: ""} />
            </NavLink>
          ))}
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};
export default FavoritePets;
