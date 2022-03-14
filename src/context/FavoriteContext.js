import { createContext, useState } from "react";
import { getDatabase, ref as dbref, push, remove, get, child } from "firebase/database";

export const FavoriteContext = createContext({});

const FavoriteContextProvider = ({ children }) => {
  const dbRef = dbref(getDatabase());
  const [favoritePets, setFavoritePets] = useState([]);
  const [reloadFavorites, setReloadFavorites] = useState(false);

  const getDataFavoritesFromDatabase = async () => {
    setReloadFavorites(false)
    setFavoritePets([]);
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
    const db = getDatabase();

    const dbRef = dbref(db);
    get(child(dbRef, "users/" + 123456 + "/favoritePets/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            if (uid === petObj.pet)  {
              // remove(db, dbref(db, "users/" + 123456 + "/favoritePets/" + key));
              remove(dbref(db, "users/" + 123456 + "/favoritePets/" + key))
              setReloadFavorites(true)
              console.log(reloadFavorites)
            }
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // const postListRef = dbref(db, "users/" + 123456 + "/favoritePets/" + uid + "/imagesUrl");
    // const newPostRef = push(postListRef);
    // remove(db, dbref(db, "users/" + 123456 + "/favoritePets/" + uid + "/imagesUrl"));
  };


  return (
    <FavoriteContext.Provider
      value={{ getDataFavoritesFromDatabase, favoritePets, reloadFavorites, deleteByUid }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
