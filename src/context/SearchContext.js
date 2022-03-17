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
  const [dataPets, setDataPets] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isAdvancedSearch, setIsAdvancesSearch] = useState(false);

  const dropdownHandler = () => {
    setIsAdvancesSearch(prevState => !prevState)
  }

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
        dropdownHandler
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
