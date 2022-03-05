import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef,
} from "react";
import { isExpired } from "react-jwt";
import { getDatabase, ref, update, child, get } from "firebase/database";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getLocalStorage, setLocalStorage } from "../localStorage";

export const TodoContext = createContext({});

const TodoContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInptuts = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const storeInDatabase = (state) => {
    const storedData = getLocalStorage("userData");
    const DB_PATH = `users/${storedData?.userId}`;
    const db = getDatabase();
    update(ref(db, DB_PATH), state);
  };

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const dataToStore = {
      token: result.user.accessToken,
      photo: result.user.photoURL,
      name: result.user.displayName,
      email: result.user.email,
      userId: result.user.uid,
    };
    setUserData(dataToStore);
    setLocalStorage("userData", dataToStore);
    setUser(result.user.email);
  };

  const handleLogin = async (emailRef, passwordRef) => {
    clearErrors();
    const auth = getAuth();
    let result = null;
    try {
      result = await signInWithEmailAndPassword(auth, emailRef, passwordRef);
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setPasswordError("El usuario no existe");
          break;
        case "auth/wrong-password":
          setPasswordError("Contraseña incorrecta");
          break;
        default:
          break;
      }
    }
    const dataToStore = {
      token: result.user.accessToken,
      photo: result.user.photoURL,
      name: result.user.displayName,
      email: result.user.email,
      userId: result.user.uid,
    };
    console.log(result.user);
    setUserData(dataToStore);
    setLocalStorage("userData", dataToStore);
    setUser(result.user.email);
  };

  const handleSignUp = async (emailRef, passwordRef) => {
    clearErrors();
    const auth = getAuth();
    let result = null;
    try {
      result = await createUserWithEmailAndPassword(auth, emailRef, passwordRef);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setEmailError("Ya dispone de una cuenta con este correo");
          break;
        case "auth/invalid-email":
          setEmailError("El email no es válido");
          break;
        case "auth/weak-password":
          setEmailError("La constraseña no es válida");
          setPasswordError(err.message);
          break;
        default:
          break;
      }
    }
    const dataToStore = {
      token: result.user.accessToken,
      photo: result.user.photoURL,
      name: result.user.displayName,
      email: result.user.email,
      userId: result.user.uid,
    };
    console.log(result.user);
    setUserData(dataToStore);
    setLocalStorage("userData", dataToStore);
    setUser(result.user.email);
  };

  // const authListener = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user){
  //       clearInptuts();
  //       setUser(user);
  //     } else {
  //       setUser("");
  //     }
  //   })
  // }

  //   const dataToStore = {
  //     token: result.user.accessToken,
  //     photo: result.user.photoURL,
  //     name: result.user.displayName,
  //     email: result.user.email,
  //     userId: result.user.uid,
  //   };
  //   setUserData(dataToStore);
  //   setLocalStorage("userData", dataToStore);
  //   setIsLoggedIn(true);
  // };

  // const loginWithEmailAndPassword = async (emailRef, passwordRef) => {
  //   const auth = getAuth();
  //   console.log(emailRef);
  //   console.log(passwordRef);
  //   let result = null;
  //   try {
  //     result = await signInWithEmailAndPassword(auth, emailRef, passwordRef);
  //   } catch (error) {
  //     console.log(error);
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   }

  //   const dataToStore = {
  //     token: result.user.accessToken,
  //     photo: result.user.photoURL,
  //     name: result.user.displayName,
  //     email: result.user.email,
  //     userId: result.user.uid,
  //   };
  //   setUserData(dataToStore);
  //   setLocalStorage("userData", dataToStore);
  //   setIsLoggedIn(true);
  // };

  // const signUpWithEmailAndPassword = async (emailRef, passwordRef) => {
  //   const auth = getAuth();
  //   const result = await createUserWithEmailAndPassword(
  //     auth,
  //     emailRef,
  //     passwordRef
  //   );
  //   const dataToStore = {
  //     token: result.user.accessToken,
  //     photo: result.user.photoURL,
  //     name: result.user.displayName,
  //     email: result.user.email,
  //     userId: result.user.uid,
  //   };
  //   setUserData(dataToStore);
  //   setLocalStorage("userData", dataToStore);
  //   setIsLoggedIn(true);
  // };

  const signOutAccount = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser('');
  };

  return (
    <TodoContext.Provider
      value={{
        handleLoginWithGoogle,
        handleLogin,
        handleSignUp,
        // loginWithEmailAndPassword,
        // signUpWithEmailAndPassword,
        signOutAccount,
        isLoggedIn,
        userData,
        setEmail,
        hasAccount,
        setHasAccount,
        setPassword,
        emailError,
        passwordError,
        user,
        setUser
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
