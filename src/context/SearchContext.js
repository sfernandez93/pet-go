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
  const [dataPets, setDataPets] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getDataFromPetsDatabase = () => {
    const dbRef = dbref(getDatabase());
    get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            setDataPets((prevState) => [
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
    photoIndex < dataPets.length - 1
      ? setPhotoIndex((prevState) => prevState + 1)
      : setPhotoIndex(0);
  };

  const decrementIndexImage = () => {
    photoIndex > 0
      ? setPhotoIndex((prevState) => prevState - 1)
      : setPhotoIndex(dataPets.length - 1);
  };

  const savePetAsFavorite = () => {
    const db = getDatabase();
    const auth = getAuth();
    const postListRef = dbref(db, "users/" + auth.currentUser.uid + "/favoritePets");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      pet: dataPets[photoIndex].uid,
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
        photoIndex,
        dataPets,
        savePetAsFavorite,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
