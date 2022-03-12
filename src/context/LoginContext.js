import {
  createContext,
  useState,
  useEffect
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
} from "firebase/auth";

import { getLocalStorage, setLocalStorage } from "../localStorage";

export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = getLocalStorage('userData');
    const hasExpired = isExpired(storedData?.token);
    if (!hasExpired && storedData) {
      setUserData(storedData);
      setIsLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    const getFromDatabase = async () => {
      const storedData = getLocalStorage('userData');
      const DB_PATH = `users/${storedData?.userId}`;
      const dbRef = ref(getDatabase());
      const dbSnapshot = await get(child(dbRef, DB_PATH))
      if (dbSnapshot.exists()) {
        // dispatch({ type: TODO_ACTIONS.SET_TASKS, tasksList: dbSnapshot.val()});
      };
    };
    if (isLoggedIn) {
      getFromDatabase();
    }
  }, [isLoggedIn])


  const clearInputs = () => {
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
    updateDataToStore(result);
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
    updateDataToStore(result);
  };

  const handleSignUp = async (emailRef, passwordRef) => {
    clearErrors();
    const auth = getAuth();
    let result = null;
    try {
      result = await createUserWithEmailAndPassword(
        auth,
        emailRef,
        passwordRef
      );
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setEmailError("Ya dispone de una cuenta con este correo");
          break;
        case "auth/invalid-email":
          setEmailError("El email no es válido");
          break;
        case "auth/weak-password":
          setPasswordError("La constraseña no es válida");
          break;
        default:
          break;
      }
    }
    updateDataToStore(result);
  };

  const signOutAccount = async () => {
    const auth = getAuth();
    await signOut(auth);
    setIsLoggedIn(false);
    clearErrors();
    clearInputs();
  };

  const updateDataToStore = (result) => {
    const dataToStore = {
      token: result.user.accessToken,
      photo: result.user.photoURL,
      name: result.user.displayName,
      email: result.user.email,
      userId: result.user.uid,
    };
    setUserData(dataToStore);
    setLocalStorage("userData", dataToStore);
    setIsLoggedIn(true);
  };

  return (
    <LoginContext.Provider
      value={{
        handleLoginWithGoogle,
        handleLogin,
        handleSignUp,
        signOutAccount,
        userData,
        email,
        password,
        setEmail,
        hasAccount,
        setHasAccount,
        setPassword,
        emailError,
        passwordError,
        isLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
