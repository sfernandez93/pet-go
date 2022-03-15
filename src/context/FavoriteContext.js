import { createContext, useState } from "react";
import {
  getDatabase,
  ref as dbref,
  remove,
  get,
  child,
} from "firebase/database";
import { getLocalStorage } from "../localStorage";

export const FavoriteContext = createContext({});

const FavoriteContextProvider = ({ children }) => {
  const dbRef = dbref(getDatabase());
  const [favoritePets, setFavoritePets] = useState([]);

  const getDataFavoritesFromDatabase = async () => {
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

              getDataFavoritesFromDatabase();
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
        deleteByUid,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
