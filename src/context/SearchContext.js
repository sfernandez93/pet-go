import { createContext, useState, useEffect, useContext } from "react";
import {
  getDatabase,
  ref as dbref,
  child,
  get,
  push,
  set,
} from "firebase/database";
import { UploadContext } from "../context/UploadContext";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [petsAllData, setPetsAllData] = useState([]);
  const [indexImages, setIndexImages] = useState(0);

  const getDataFromPetsDatabase = async () => {
    const dbRef = dbref(getDatabase());
    get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            setPetsAllData((prevState) => [
              ...prevState,
              {
                uid: key,
                name: petObj.name,
                age: petObj.age,
                race: petObj.race,
                city: petObj.city,
                phone:petObj.phone,
                email:petObj.email,
                isDisabled: petObj.isDisabled,
                details: petObj.details,
                imagesUrl: petObj.imagesUrl,
              },
            ]);

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
    indexImages < petsAllData.length - 1
      ? setIndexImages((prevState) => prevState + 1)
      : setIndexImages(0);
  };

  const decrementIndexImage = () => {
    indexImages > 0
      ? setIndexImages((prevState) => prevState - 1)
      : setIndexImages(petsAllData.length - 1);
  };

  const savePetAsFavorite = () => {
    const db = getDatabase();
    const auth = getAuth();
    // const postListRef = dbref(db, "users/" + auth.currentUser.uid);
    const postListRef = dbref(db, "users/" + 123456 + "/favoritePets");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      pet: petsAllData[indexImages].uid,
    }).then(() => {
      incrementIndexImage();
    });
  };

  return (
    <SearchContext.Provider
      value={{
        getDataFromPetsDatabase,
        incrementIndexImage,
        decrementIndexImage,
        indexImages,
        petsAllData,
        savePetAsFavorite,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
