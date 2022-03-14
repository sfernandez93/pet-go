import { createContext, useState, useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet] = useState(null);
  const [indexImagePet, setIndexImagePet] = useState(0);
  const { dataPets } = useContext(SearchContext);

  const findByUid = (uid) => {
    Object.keys(dataPets).forEach((key) => {
      const petUid = dataPets[key].uid;
      if (uid === petUid) return setDetailPet(dataPets[key]);
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
