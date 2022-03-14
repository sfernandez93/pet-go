import { createContext, useState, useEffect, useContext } from "react";
import { SearchContext } from "./SearchContext";

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet] = useState(null);
  const [indexImagePet, setIndexImagePet] = useState(0);
  const { petsAllData, getDataFromPetsDatabase } = useContext(SearchContext);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findByUid = (uid) => {
    Object.keys(petsAllData).forEach((key) => {
      const petUid = petsAllData[key].uid;
      if (uid === petUid) return setDetailPet(petsAllData[key]);
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
        setIndexImagePet
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
