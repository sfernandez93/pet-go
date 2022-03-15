import { createContext, useState, useEffect, useContext } from "react";
import {
  getDatabase,
  ref as dbref,
  child,
  get,
  push,
  set,
  update,
} from "firebase/database";
import { FavoriteContext } from "../context/FavoriteContext";
import { getLocalStorage } from "../localStorage";
import { LoginContext } from "./LoginContext";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [dataPets, setDataPets] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [favoritesUid, setFavoritesUid] = useState([]);

  const { getDataFavoritesFromDatabase } = useContext(FavoriteContext);
  const { isLoggedIn } = useContext(LoginContext);
  const { reloadPetsData } = useContext(FavoriteContext);

  useEffect(() => {
    if (isLoggedIn) getFavoritesUid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoritesUid]);

  useEffect(() => {
    // if (reloadPetsData) getFavoritesUid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPetsData]);

  const getFavoritesUid = async () => {
    const storedData = getLocalStorage("userData");
    const db = getDatabase();
    const dbRef = dbref(db);
    const arr = [];

    try {
      const snapshot = await get(child(dbRef, "users/" + storedData.userId + "/favoritePets/"))
      if (snapshot.exists()) {
        Object.keys(snapshot.val()).forEach((key) => {
          arr.push(snapshot.val()[key].pet);
        });
      } else {
        console.log("No data available");
      }
      setFavoritesUid(arr);
    } catch(error) {
      console.error(error);
    };
    
  };


  const getDataFromPetsDatabase = async () => {
    const dbRef = dbref(getDatabase());

    await get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDataPets([])
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            console.log(favoritesUid)
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
    if ( photoIndex < dataPets.length - 1){
      setPhotoIndex((prevState) => prevState + 1)
    } else {
      setPhotoIndex(0)
      getFavoritesUid()
    }
  };

  const decrementIndexImage = () => {
    photoIndex > 0
      ? setPhotoIndex((prevState) => prevState - 1)
      : setPhotoIndex(dataPets.length - 1);
  };

  const removeElementFromDataPets = (uid) => {
    setDataPets((prevState) => prevState.filter((pet) => pet.uid !== uid));
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

    // removeElementFromDataPets(dataPets[photoIndex].uid);
    incrementIndexImage();
  };

  return (
    <SearchContext.Provider
      value={{
        getDataFromPetsDatabase,
        incrementIndexImage,
        decrementIndexImage,
        photoIndex,
        dataPets,
        savePetAsFavorite,
        getFavoritesUid
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
