import { createContext, useState, useContext } from "react";
import { SearchContext } from "./SearchContext";
import { FavoriteContext } from "./FavoriteContext";

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet] = useState(null);
  const [indexImagePet, setIndexImagePet] = useState(0);
  const { dataPets } = useContext(SearchContext);
  const { favoritePets } = useContext(FavoriteContext);

  const findByUid = (uid) => {
    Object.keys(dataPets.concat(favoritePets)).forEach((key) => {
      const petUid = dataPets.concat(favoritePets)[key].uid;
      if (uid === petUid)
        return setDetailPet(dataPets.concat(favoritePets)[key]);
    });
  };

  const incrementIndexImage = () => {
    indexImagePet < Object.keys(detailPet.imagesUrl).length - 1
      ? setIndexImagePet((prevState) => prevState + 1)
      : setIndexImagePet(0);
  };

  const decrementIndexImage = () => {
    indexImagePet > 0
      ? setIndexImagePet((prevState) => prevState - 1)
      : setIndexImagePet(Object.keys(detailPet.imagesUrl).length - 1);
  };

  return (
    <DetailsContext.Provider
      value={{
        incrementIndexImage,
        decrementIndexImage,
        indexImagePet,
        findByUid,
        detailPet,
        setIndexImagePet,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
