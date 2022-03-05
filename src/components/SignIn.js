import React, { useRef, useEffect, useContext, useState } from "react";
import { getAuth } from "firebase/auth";
import "./SignIn.css";
import { setLocalStorage } from "../localStorage";
import { TodoContext } from "../context/TodoContext";
import LoginButton from "./LoginButton";

const SignIn = (setUser) => {
  const { handleLoginWithGoogle, setHasAccount, handleSignUp, handleLogin, hasAccount, loginWithEmailAndPassword, signUpWithEmailAndPassword, emailError, passwordError, email, setEmail, password, setPassword } =
    useContext(TodoContext);
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
    handleSignUp(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  const handleLoginWithEmailAndPassword = () => {
    handleLogin(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

//   return (
//     <div className="signin">
//       <form action="">
//         <h1>Sign in</h1>
//         <input ref={emailRef} type="email" />
//         <input ref={passwordRef} type="password" />
//         <button onClick={handleLoginWithEmailAndPassword}> Sign in</button>
//         <h6>
//           Not yet register?{" "}
//           <span className="signin__link" onClick={handleSignUpWithEmailAndPassword}>
//             sign up
//           </span>
//         </h6>
//       </form>
//       <LoginButton onClick={handleLoginWithGoogle} />
//     </div>
//   );

return (
        <div className="login">
          <div className="loginContainer">
              <label>UserName</label>
              <input ref={emailRef}  type = "email" autoFocus required value = {email}
              onChange = {(e) => setEmail(e.target.value)}/>
              <p className = "errorMsg"> {emailError} </p>
              <label>Password</label>
              <input ref={passwordRef} type = "password" autoFocus required value = {password}
              onChange = {(e) => setPassword(e.target.value)}/>
              <p className="errorMsg">{passwordError}</p>
              <div className = "btnContainer">
                  {hasAccount ? (
                      <>
                      <button onClick={handleLoginWithEmailAndPassword}>Sign in</button>
                      <p> Dont have an account? <span onClick= {() => setHasAccount(!hasAccount)}> Sign up</span></p>
                      </>
                  ): (
                      <>
                      <button onClick={handleSignUpWithEmailAndPassword}>Sign up</button>
                      <p>Have an account? <span onClick= {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                      </>
                  )}
              </div>
              <LoginButton onClick={handleLoginWithGoogle} />
          </div>
        </div>
      );
};
export default SignIn;
