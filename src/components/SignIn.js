import React, { useRef, useEffect, useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import "./SignIn.css";
import { setLocalStorage } from "../localStorage";
import { TodoContext } from "../context/TodoContext";
import LoginButton from "./LoginButton";

const SignIn = (setUser) => {
  const {
    handleLoginWithGoogle,
    setHasAccount,
    handleSignUp,
    handleLogin,
    hasAccount,
    loginWithEmailAndPassword,
    signUpWithEmailAndPassword,
    emailError,
    passwordError,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(TodoContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      //   const user = {
      //     uid: userAuth.uid,
      //     email: userAuth.email,
      //   };
      //   if (userAuth) {
      //     console.log("userAuth", userAuth);
      //     setUserData(user);
      //   } else {
      //     setUserData(null);
      //   }
    });
    return unsubscribe;
  }, []);

  const handleSignUpWithEmailAndPassword = () => {
    handleSignUp(emailRef.current.value, passwordRef.current.value);
  };

  const handleLoginWithEmailAndPassword = () => {
    handleLogin(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div>
      <div className="w-80 py-8 flex items-center flex-col mb-3">
        <div className="mt-8 w-64 flex flex-col">
          <input
            ref={emailRef}
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            placeholder="Email"
          ></input>
          <p className="text-xs self-center pb-5 text-blue-900 font-semibold">
            {" "}
            {emailError}{" "}
          </p>
          <input
            ref={passwordRef}
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            placeholder="Password"
          ></input>
          <p className="text-xs self-center pb-5 text-blue-900 font-semibold">
            {passwordError}
          </p>
          {hasAccount ? (
            <>
              <button
                className=" text-sm text-center bg-blue-violet text-white py-1 rounded font-medium"
                onClick={handleLoginWithEmailAndPassword}
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              <button
                className=" text-sm text-center bg-blue-violet text-white py-1 rounded font-medium"
                onClick={handleSignUpWithEmailAndPassword}
              >
                Sign up
              </button>
            </>
          )}
        </div>
        <div className="flex justify-evenly space-x-2 w-64 mt-4">
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button className="mt-4 flex" onClick={handleLoginWithGoogle}>
          <div className="bg-no-repeat google-logo mr-1"></div>
          <span className="text-xs text-blue-900 font-semibold">
            Log in with Google
          </span>
        </button>
      </div>
      <div className="text-center w-80 py-4">
        {hasAccount ? (
          <>
            <p>
              {" "}
              Don't have an account?{" "}
              <span
                className="text-dark-violet text-sm font-semibold"
                onClick={() => setHasAccount(!hasAccount)}
              >
                {" "}
                Sign up
              </span>
            </p>
          </>
        ) : (
          <>
            <p>
              Have an account?{" "}
              <span
                className="text-dark-violet text-sm font-semibold"
                onClick={() => setHasAccount(!hasAccount)}
              >
                Sign in
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default SignIn;
