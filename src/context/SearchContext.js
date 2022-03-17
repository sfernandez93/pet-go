import { createContext, useState, useEffect } from "react";
import {
  getDatabase,
  ref as dbref,
  child,
  get,
  push,
  set,
} from "firebase/database";
import { getLocalStorage } from "../localStorage";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [dataPets, setDataPets] = useState([]);
  const [dataFilterPets, setDataFilterPets] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isAdvancedSearch, setIsAdvancesSearch] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  const handleChange = (event) => {
    let newObject = {};
    newObject[event.target.name] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      ...newObject,
    }));
  };

  const dropdownHandler = () => {
    setIsAdvancesSearch((prevState) => !prevState);
  };

  const getData = async () => {
    const favorites = await getFavoritesUid();
    await getDataNotInFavorites(favorites);
  };

  const getFavoritesUid = async () => {
    const storedData = getLocalStorage("userData");
    const db = getDatabase();
    const dbRef = dbref(db);
    const favorites = [];

    try {
      const snapshot = await get(
        child(dbRef, "users/" + storedData.userId + "/favoritePets/")
      );
      if (snapshot.exists()) {
        Object.keys(snapshot.val()).forEach((key) => {
          favorites.push(snapshot.val()[key].pet);
        });
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }

    return favorites;
  };

  const getStringTimeElapsedSincePublication = (dateUpload) => {
    if (dateUpload) {
      const timeMiliseconds = Date.now() - dateUpload;
      const timeDays = Math.floor(timeMiliseconds / 86400000);
      if (Math.floor(timeMiliseconds / 86400000) > 0) {
        return ` (publicado hace ${timeDays} días)`;
      } else {
        const timeHours = Math.floor(timeMiliseconds / 3600000);
        return timeHours > 0
          ? ` (publicado hace ${timeHours} horas)`
          : ` (publicado hace una hora)`;
      }
    }
    return "";
  };

  const getDataNotInFavorites = async (favoritesUid) => {
    const dbRef = dbref(getDatabase());
    await get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataPets([]);
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            const timeElapsedSincePublication =
              getStringTimeElapsedSincePublication(petObj.dateUpload);
            if (
              (favoritesUid && favoritesUid.length < 1) ||
              (favoritesUid.length > 0 && !favoritesUid.includes(key))
            ) {
              petObj["uid"] = key;
              petObj["timeElapsedSincePublication"] =
                timeElapsedSincePublication;

              setDataPets((prevState) => [...prevState, petObj]);
            }
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getDataFiltered = async (e) => {
    e.preventDefault();
    await getData();
    setIsAdvancesSearch(false);
    setDataPets(
      dataPets.filter(
        (x) =>
          (formValues.region && formValues.region !== "0"
            ? x.region === formValues.region
            : true) &&
          (formValues.is_active ? x.isActive : true) &&
          (formValues.is_quite ? x.isQuiet : true) &&
          (formValues.is_active ? x.isActive : true) &&
          (formValues.is_loving ? x.isLoving : true) &&
          (formValues.is_small ? x.isSmall : true) &&
          (formValues.is_big ? x.isBig : true) &&
          (formValues.is_playful ? x.isPlayful : true) &&
          (formValues.is_sociable ? x.isSociable : true) &&
          (formValues.is_trainable ? x.isTrainable : true) &&
          (formValues.is_guide ? x.isGuide : true) &&
          (formValues.is_notalergic ? x.isNotAlergic : true)
      )
    );
  };

  const incrementIndexImage = () => {
    if (photoIndex < dataPets.length - 1) {
      setPhotoIndex((prevState) => prevState + 1);
    } else {
      setPhotoIndex(0);
      getData();
    }
  };

  const savePetAsFavorite = async () => {
    const db = getDatabase();
    const storedData = getLocalStorage("userData");
    const postListRef = dbref(
      db,
      "users/" + storedData.userId + "/favoritePets"
    );

    const newPostRef = await push(postListRef);

    await set(newPostRef, {
      pet: dataPets[photoIndex].uid,
    });

    incrementIndexImage();
  };

  return (
    <SearchContext.Provider
      value={{
        getDataNotInFavorites,
        incrementIndexImage,
        photoIndex,
        dataPets,
        savePetAsFavorite,
        getFavoritesUid,
        getData,
        isAdvancedSearch,
        dropdownHandler,
        getDataFiltered,
        handleChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
