import { createContext, useState, useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { FavoriteContext } from "./FavoriteContext";
// import { init } from '@emailjs/browser';
// init("s57n_tFKifkRKHUzy");
import emailjs from "@emailjs/browser";

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
  const [detailPet, setDetailPet] = useState(null);
  const [indexImagePet, setIndexImagePet] = useState(0);
  const [features, setFeatures] = useState([]);
  const [isButtonEmailClicked, setIsButtonEmailClicked] = useState({
    info: false,
    email: false,
    call: false,
  });

  const { dataPets } = useContext(SearchContext);
  const { favoritePets } = useContext(FavoriteContext);

  useEffect(() => {
    if (detailPet) getFeatures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailPet]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsButtonEmailClicked((prevState) => ({
      ...prevState,
      info: true,
    }));

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_jdc32vz",
          "template_2z4hytq",
          e.target,
          "s57n_tFKifkRKHUzy"
        )
        .then(
          setIsButtonEmailClicked((prevState) => ({
            ...prevState,
            info: false,
          })),
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, 500);
  };

  const getFeatures = () => {
    setFeatures([]);
    if (detailPet.isDisabled)
      setFeatures((prevState) => [...prevState, "Modo ayuda"]);
    if (detailPet.isActive)
      setFeatures((prevState) => [...prevState, "Activo"]);
    if (detailPet.isBig)
      setFeatures((prevState) => [...prevState, "Perro grande"]);
    if (detailPet.isDocile) setFeatures((prevState) => [...prevState, "Dócil"]);
    if (detailPet.isGuide)
      setFeatures((prevState) => [...prevState, "Perro guía"]);
    if (detailPet.isLoving)
      setFeatures((prevState) => [...prevState, "Cariñoso"]);
    if (detailPet.isNotAlergic)
      setFeatures((prevState) => [...prevState, "Apto alérgicos"]);
    if (detailPet.isPlayful)
      setFeatures((prevState) => [...prevState, "Juguetón"]);
    if (detailPet.isQuiet)
      setFeatures((prevState) => [...prevState, "Tranquilo"]);
    if (detailPet.isSmall)
      setFeatures((prevState) => [...prevState, "Perro pequeño"]);
    if (detailPet.isSociable)
      setFeatures((prevState) => [...prevState, "Sociable"]);
    if (detailPet.isTrainable)
      setFeatures((prevState) => [...prevState, "Entrenable"]);
  };

  const findByUid = (uid) => {
    const allDataPets = dataPets.concat(favoritePets);
    Object.keys(allDataPets).forEach((key) => {
      const petUid = allDataPets[key].uid;
      if (uid === petUid) return setDetailPet(allDataPets[key]);
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
        sendEmail,
        features,
        isButtonEmailClicked,
        setIsButtonEmailClicked,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
