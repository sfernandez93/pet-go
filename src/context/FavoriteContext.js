import { createContext, useState, useEffect, useContext } from "react";
import {
  getDatabase,
  ref as dbref,
  remove,
  get,
  child,
  update,
} from "firebase/database";
import { getLocalStorage } from "../localStorage";
import { LoginContext } from "./LoginContext";

export const FavoriteContext = createContext({});

const FavoriteContextProvider = ({ children }) => {
  const dbRef = dbref(getDatabase());
  const [favoritePets, setFavoritePets] = useState([]);
  const [reloadPetsData, setReloadPetsData] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (isLoggedIn) getDataFavoritesFromDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    if (reloadPetsData) getDataFavoritesFromDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadPetsData]);

  const getDataFavoritesFromDatabase = async () => {
    setReloadPetsData(false);
    setFavoritePets([]);
    const storedData = getLocalStorage("userData");

    get(child(dbRef, "users/" + storedData.userId + "/favoritePets"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petUid = snapshot.val()[key].pet;
            findPetUrlPhotoByUid(petUid);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const findPetUrlPhotoByUid = async (uid) => {
    get(child(dbRef, "pets/" + uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const petObj = snapshot.val();
          petObj.uid = uid;
          setFavoritePets((prevState) => [...prevState, petObj]);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteByUid = (uid) => {
    const storedData = getLocalStorage("userData");
    const db = getDatabase();
    const dbRef = dbref(db);

    get(child(dbRef, "users/" + storedData.userId + "/favoritePets/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            if (uid === petObj.pet) {
              remove(
                dbref(db, "users/" + storedData.userId + "/favoritePets/" + key)
              );
              
              setReloadPetsData(true);
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

  return (
    <FavoriteContext.Provider
      value={{
        getDataFavoritesFromDatabase,
        favoritePets,
        reloadPetsData,
        deleteByUid,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
