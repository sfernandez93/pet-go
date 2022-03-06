import React, { useRef, useContext } from "react";

import { LoginContext } from "../context/LoginContext";
import SignInUpButton from "../components/SignInUpButton";
import LoginInput from "../components/LoginInput";
import LoginError from "../components/LoginError";
import SignInGoogleButton from "../components/SignInGoogleButton";
import LoginSpacedBar from "../components/LoginSpacedBar";
import LoginChangeAccount from "../components/LoginChangeAccount";

const SignIn = (setUser) => {
  const { emailError, passwordError, email, setEmail, password, setPassword } =
    useContext(LoginContext);
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
        <LoginSpacedBar></LoginSpacedBar>
        <SignInGoogleButton></SignInGoogleButton>
      </div>
      <LoginChangeAccount></LoginChangeAccount>
    </div>
  );
};
export default SignIn;
