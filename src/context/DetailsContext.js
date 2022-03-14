import { createContext, useState, useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet]= useState(null);
  const [indexImagePet, setIndexImagePet]= useState(0);
  const { indexImages, petsAllData, getDataFromPetsDatabase } =
    useContext(SearchContext);

    useEffect(() => {
      getDataFromPetsDatabase();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petsAllData]);

  const findByUid = (uid) => {
    console.log("HEHE")
    Object.keys(petsAllData).forEach((key) => {
      const petUid = petsAllData[key].uid;
      if (uid === petUid) return setDetailPet(petsAllData[key]) 
    });
  }

  const incrementIndexImage = () => {
    indexImages < petsAllData[indexImages].imagesUrl.length - 1
      ? setIndexImagePet((prevState) => prevState + 1)
      : setIndexImagePet(0);
  };

  const decrementIndexImage = () => {
    indexImages > 0
      ? setIndexImagePet((prevState) => prevState - 1)
      : setIndexImagePet(petsAllData[indexImages].imagesUrl.length - 1);
  };

  return (
    <DetailsContext.Provider value={{incrementIndexImage, decrementIndexImage, indexImagePet, findByUid, detailPet}}>{children}</DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
