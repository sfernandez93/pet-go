import { FavoriteContext } from "../context/FavoriteContext";
import { useContext, useEffect } from "react";
import FavoriteItem from "../components/Favorite/FavoriteItem";

const FavoritePets = () => {
  const { getDataFavoritesFromDatabase, urlImages } = useContext(FavoriteContext);

  useEffect(() => {
    getDataFavoritesFromDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-8 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-3 gap-x-4">
          {[...urlImages].map((url, i) => (
          <FavoriteItem key={i} urlImage = {url} />
        ))}
        </div>
      </div>
    </div>
  );
};
export default FavoritePets;
