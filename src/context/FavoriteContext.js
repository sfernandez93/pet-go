import { createContext, useState } from "react";
import { getDatabase, ref as dbref, push, remove, get, child } from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const FavoriteContext = createContext({});

const FavoriteContextProvider = ({ children }) => {
  const dbRef = dbref(getDatabase());
  const [favoritePets, setFavoritePets] = useState([]);
  const [reloadFavorites, setReloadFavorites] = useState(false);
  const auth = getAuth();

  const getDataFavoritesFromDatabase = async () => {
    setReloadFavorites(false)
    setFavoritePets([]);

    get(child(dbRef, "users/" + auth.currentUser.uid + "/favoritePets"))
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
    get(child(dbRef, "users/" + auth.currentUser.uid + "/favoritePets/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            if (uid === petObj.pet)  {
              remove(dbref(db, "users/" + auth.currentUser.uid + "/favoritePets/" + key))
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

    // const postListRef = dbref(db, "users/" + auth.currentUser.uid + "/favoritePets/" + uid + "/imagesUrl");
    // const newPostRef = push(postListRef);
    // remove(db, dbref(db, "users/" + auth.currentUser.uid + "/favoritePets/" + uid + "/imagesUrl"));
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
