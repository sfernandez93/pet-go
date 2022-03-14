import { createContext, useState } from "react";
import { getDatabase, ref as dbref, child, get } from "firebase/database";

export const FavoriteContext = createContext({});

const FavoriteContextProvider = ({ children }) => {
  const dbRef = dbref(getDatabase());
  const [urlImages, setUrlImages] = useState([]);

  const getDataFavoritesFromDatabase = async () => {
    get(child(dbRef, "users/" + 123456 + "/favoritePets"))
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
          const petObj = snapshot.val().imagesUrl;
          const petUrl = petObj[Object.keys(petObj)[0]];
          setUrlImages((prevState) => [...prevState, petUrl]);
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
      value={{ getDataFavoritesFromDatabase, urlImages }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
