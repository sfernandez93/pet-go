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
  const [petData, setPetData] = useState({});
  const [indexImages, setIndexImages] = useState(0);

  useEffect(() => {
    getProfileImageByUid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petData]);

  useEffect(() => {
    console.log(petsAllData);
  }, [petsAllData]);

  const getDataFromPetsDatabase = async () => {
    const dbRef = dbref(getDatabase());
    get(child(dbRef, `pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) => {
            const petObj = snapshot.val()[key];
            console.log(petObj);
            setPetData({
              uid: key,
              name: petObj.name,
              age: petObj.age,
              city: petObj.city,
              isDisabled: petObj.isDisabled,
            });
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getProfileImageByUid = () => {
    const dbRef = dbref(getDatabase());
    return get(child(dbRef, `petImages/${petData.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const imageObj = snapshot.val();
          const firstKey = Object.keys(imageObj)[0];
          const imageUrl = imageObj[firstKey].url;

          setPetsAllData((prevState) => [
            ...prevState,
            {
              uid: petData.uid,
              name: petData.name,
              age: petData.age,
              city: petData.city,
              isDisabled: petData.isDisabled,
              profileImage: imageUrl,
            },
          ]);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const incrementIndexImage = () => {
    console.log(petsAllData);
    indexImages < petsAllData.length - 1
      ? setIndexImages((prevState) => prevState + 1)
      : setIndexImages(0);
  };

  const savePetAsFavorite = () => {
    const db = getDatabase();
    const auth = getAuth();
    // const postListRef = dbref(db, "users/" + auth.currentUser.uid);
    const postListRef = dbref(db, "users/" + 123456);
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
