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

export const DetailsContext = createContext({});

const DetailsContextProvider = ({ children }) => {
 

  return (
    <DetailsContext.Provider value={{  }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsContextProvider;
