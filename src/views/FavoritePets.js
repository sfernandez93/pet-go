import { FavoriteContext } from "../context/FavoriteContext";
import { useContext, useEffect } from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const FavoritePets = () => {
  const { getDataFavoritesFromDatabase, favoritePets } =
    useContext(FavoriteContext);

  useEffect(() => {
    getDataFavoritesFromDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <LogoIconBar></LogoIconBar>
      <div className="mt-16 mb-16 max-w-2xl mx-auto pt-8 pb-16 max-w-7xl px-4">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-3">
          {[...favoritePets].map((url, i) => (
            <div
              key={i}
              to={`/detail/${
                favoritePets && favoritePets.length > 0
                  ? favoritePets[i].uid
                  : ""
              }`}
            >
              <FavoriteItem
                key={i}
                urlImage={
                  favoritePets && favoritePets.length > 0
                    ? favoritePets[i].imagesUrl[
                        Object.keys(favoritePets[i].imagesUrl)[0]
                      ]
                    : ""
                }
                petUid={
                  favoritePets && favoritePets.length > 0
                    ? favoritePets[i].uid
                    : ""
                }
              />
            </div>
          ))}
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};
export default FavoritePets;
