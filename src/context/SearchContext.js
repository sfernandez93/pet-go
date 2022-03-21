import { createContext, useState } from "react";
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
  const storedData = getLocalStorage("userData");
  const db = getDatabase();
  const dbRef = dbref(db);
  const [dataPets, setDataPets] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [isFinish, setIsFinish] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
    setIsAdvancedSearch((prevState) => !prevState);
  };

  const setPhotoHidden = (obj) => {
    dataPets.forEach((key) => {
      if (key.uid === obj.uid) key["isPhotoHidden"] = true;
    });
    // setDataPets(dataPets);
  };

  const handleIncrement = (obj) => {
    setPhotoHidden(obj);
    incrementIndexImage();
  };

  const handleSaveAsFavorite =  async (obj) => {
    setIsFavorite(true);
    setPhotoHidden(obj);
    setTimeout(() => {
      savePetAsFavorite();
    }, 300);
  };

  const getData = async (formValues) => {
    setIsFinish(false);
    const favorites = await getFavoritesUid();
    await getDataNotInFavorites(favorites, formValues);
  };

  const getFavoritesUid = async () => {
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
        return ` (subido hace ${timeDays} días)`;
      } else {
        const timeHours = Math.floor(timeMiliseconds / 3600000);
        return timeHours > 0
          ? ` (subido hace ${timeHours} horas)`
          : ` (subido hace una hora)`;
      }
    }
    return "";
  };

  const getDataNotInFavorites = async (favoritesUid, formValues) => {
    const dbRef = dbref(getDatabase());
    await get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataPets([]);
          Object.keys(snapshot.val()).forEach((key) => {
            let addPet = false;
            const petObj = snapshot.val()[key];
            const timeElapsedSincePublication =
              getStringTimeElapsedSincePublication(petObj.dateUpload);
            if (favoritesUid.length < 1 || !favoritesUid.includes(key)) {
              addPet =
                formValues && Object.keys(formValues).length > 0
                  ? isPetMeetConditionFilter(petObj)
                  : true;

              if (addPet) addDataPet(petObj, key, timeElapsedSincePublication);
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

  const findProvinceByUid = async (uid) => {
    try {
      const snapshot = await get(child(dbRef, "provincias/" + uid));
      if (snapshot.exists()) {
        return snapshot.val().name;
      } else {
        console.log("No data available");
        return "";
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addDataPet = async (petObj, key, timeElapsedSincePublication) => {
    const region =
      petObj.region && petObj.region !== "0"
        ? await findProvinceByUid(petObj.region)
        : "";
    petObj["uid"] = key;
    petObj["timeElapsedSincePublication"] = timeElapsedSincePublication;
    petObj["region"] = region;
    petObj["isPhotoHidden"] = false;
    setDataPets((prevState) => [...prevState, petObj]);
  };

  const isPetMeetConditionFilter = (petObj) => {
    if (
      (formValues.region && formValues.region !== "0"
        ? petObj.region === formValues.region
        : true) &&
      (formValues.is_active ? petObj.isActive : true) &&
      (formValues.is_docile ? petObj.isDocile : true) &&
      (formValues.is_quiet ? petObj.isQuiet : true) &&
      (formValues.is_loving ? petObj.isLoving : true) &&
      (formValues.is_small ? petObj.isSmall : true) &&
      (formValues.is_big ? petObj.isBig : true) &&
      (formValues.is_playful ? petObj.isPlayful : true) &&
      (formValues.is_sociable ? petObj.isSociable : true) &&
      (formValues.is_trainable ? petObj.isTrainable : true) &&
      (formValues.is_guide ? petObj.isGuide : true) &&
      (formValues.is_disabled ? petObj.isDisabled : true) &&
      (formValues.is_notalergic ? petObj.isNotAlergic : true)
    ) {
      return true;
    }
    return false;
  };

  const getDataFiltered = async (e) => {
    e.preventDefault();
    setPhotoIndex(0);
    setIsAdvancedSearch(false);
    await getData(formValues);
  };

  const incrementIndexImage = () => {
    setPhotoIndex((prevState) => prevState + 1);
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
    setIsFavorite(false);
  };

  return (
    <SearchContext.Provider
      value={{
        getDataNotInFavorites,
        incrementIndexImage,
        photoIndex,
        setPhotoIndex,
        setDataPets,
        dataPets,
        savePetAsFavorite,
        getFavoritesUid,
        getData,
        isAdvancedSearch,
        formValues,
        setFormValues,
        dropdownHandler,
        getDataFiltered,
        handleChange,
        handleIncrement,
        handleSaveAsFavorite,
        setIsAdvancedSearch,
        getStringTimeElapsedSincePublication,
        isFinish,
        setIsFinish,
        isFavorite, 
        setIsFavorite
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
