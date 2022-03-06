import React, { useRef, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
// import "./style.css";
import { LoginContext } from "../context/LoginContext";
import SignInUpButton from "../components/SignInUpButton";
import LoginInput from "../components/LoginInput";
import LoginError from "../components/LoginError";

const SignIn = (setUser) => {
  const {
    handleLoginWithGoogle,
    setHasAccount,
    handleSignUp,
    handleLogin,
    hasAccount,
    emailError,
    passwordError,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(LoginContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <div className="w-80 py-8 flex items-center flex-col mb-3">
        <div className="mt-8 w-64 flex flex-col">
          <LoginInput
            ref={emailRef}
            type={"email"}
            inputValue={email}
            inputFunction={setEmail}
            placeholder={"Email"}
          ></LoginInput>
          <LoginError error={emailError}></LoginError>
          <LoginInput
            ref={passwordRef}
            type={"password"}
            inputValue={password}
            inputFunction={setPassword}
            placeholder={"Password"}
          ></LoginInput>
          <LoginError error={passwordError}></LoginError>
          <SignInUpButton></SignInUpButton>
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
