import { FavoriteContext } from "../context/FavoriteContext";
import { SearchContext } from "../context/SearchContext";
import { useContext, useEffect } from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";
import { NavLink } from "react-router-dom";

const FavoritePets = () => {
  const { getDataFavoritesFromDatabase, urlImages } =
    useContext(FavoriteContext);

  const { petsAllData, indexImages, getDataFromPetsDatabase } =
    useContext(SearchContext);

  useEffect(() => {
    if (urlImages.length < 1) getDataFavoritesFromDatabase();
    if (petsAllData.length < 1) getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-8 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-3 gap-x-4">
          {[...urlImages].map((url, i) => (
            <NavLink
              key={i}
              to={`/detail/${
                petsAllData && petsAllData.length > 0
                  ? petsAllData[indexImages].uid
                  : ""
              }`}
            >
              <FavoriteItem key={i} urlImage={url} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FavoritePets;
