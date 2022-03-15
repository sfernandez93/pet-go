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

  const calculateDaysElapsedSincePublication = (petObj) => {
    const timeMiliseconds = Date.now() - petObj.dateUpload;
    console.log(timeMiliseconds/86400000)
    return Math.floor(timeMiliseconds/86400000);
  };
  const getDataNotInFavorites = async (favoritesUid) => {
    const dbRef = dbref(getDatabase());

    await get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataPets([]);
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            const daysElapsedSincePublication =
              calculateDaysElapsedSincePublication(petObj);
            if (favoritesUid.length > 0 && !favoritesUid.includes(key)) {
              setDataPets((prevState) => [
                ...prevState,
                {
                  uid: key,
                  name: petObj.name,
                  age: petObj.age,
                  race: petObj.race,
                  city: petObj.city,
                  phone: petObj.phone,
                  email: petObj.email,
                  isDisabled: petObj.isDisabled,
                  details: petObj.details,
                  imagesUrl: petObj.imagesUrl,
                  dateUpload: petObj.dateUpload,
                  daysElapsedSincePublication: daysElapsedSincePublication,
                },
              ]);
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
