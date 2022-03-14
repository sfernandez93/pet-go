import { createContext, useState, useEffect } from "react";
import { isExpired } from "react-jwt";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getLocalStorage, setLocalStorage } from "../localStorage";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = getLocalStorage("userData");
    const hasExpired = isExpired(storedData?.token);
    if (!hasExpired && storedData) {
      setUserData(storedData);
      setIsLoggedIn(true);
      navigate("/search", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const updateDataAndRedirect = (result, route) => {
    updateDataToStore(result);
    navigate(route, { replace: true });
  };

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    updateDataAndRedirect(result, "/search");
  };

  const handleLogin = async (emailRef, passwordRef) => {
    clearErrors();
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
    updateDataAndRedirect(result, "/search");
  };

  const handleSignUp = async (emailRef, passwordRef) => {
    clearErrors();
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
    updateDataAndRedirect(result, "/search");
  };

  const signOutAccount = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
    clearErrors();
    clearInputs();
    navigate("/login", { replace: true });
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
