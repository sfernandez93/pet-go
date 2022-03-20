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
  // const { getStringTimeElapsedSincePublication } = useContext(SearchContext);

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
          : ` (subido ahora mismo)`;
      }
    }
    return "";
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

  const findPetUrlPhotoByUid = async (uid) => {
    try {
      const snapshot = await get(child(dbRef, "pets/" + uid));
      if (snapshot.exists()) {
        const petObj = snapshot.val();
        const region = await findProvinceByUid(petObj.region);
        const timeElapsedSincePublication =
          getStringTimeElapsedSincePublication(petObj.dateUpload);
        petObj["uid"] = uid;
        petObj["timeElapsedSincePublication"] = timeElapsedSincePublication;
        petObj["region"] = region;
        setFavoritePets((prevState) => [...prevState, petObj]);
      } else {
        console.log("No data available");
      }
    } catch (err) {
      console.error(err);
    }
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
