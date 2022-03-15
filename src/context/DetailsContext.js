import { createContext, useState, useContext } from "react";
import { SearchContext } from "./SearchContext";
import { FavoriteContext } from "./FavoriteContext";
// import { init } from '@emailjs/browser';
// init("s57n_tFKifkRKHUzy");
import emailjs from '@emailjs/browser';

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet] = useState(null);
  const [indexImagePet, setIndexImagePet] = useState(0);
  const { dataPets } = useContext(SearchContext);
  const { favoritePets } = useContext(FavoriteContext);


  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target)
    emailjs.sendForm('service_jdc32vz', 'template_2z4hytq', e.target, 's57n_tFKifkRKHUzy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
        sendEmail
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
