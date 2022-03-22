import { useRef, useContext } from "react";

import { LoginContext } from "../context/LoginContext";
import SignInUpButton from "../components/Login/SignInUpButton";
import LoginInput from "../components/Login/LoginInput";
import LoginError from "../components/Login/LoginError";
import SignInGoogleButton from "../components/Login/SignInGoogleButton";
import LoginSpacedBar from "../components/Login/LoginSpacedBar";
import LoginChangeAccount from "../components/Login/LoginChangeAccount";

const SignIn = () => {
  const { emailError, passwordError, email, setEmail, password, setPassword } =
    useContext(LoginContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="gradient-background h-full flex flex-col items-center">
      <div className="w-80 py-8 flex items-center flex-col mb-3">
        <div className="mt-8 w-64 flex flex-col">
          <img
            src={require("../images/output-logo-remove.png")}
            alt="logo"
          ></img>
          <LoginInput
            inputRef={emailRef}
            type="email"
            inputValue={email}
            inputFunction={setEmail}
            placeholder="Email"
            dataCy="email"
          ></LoginInput>
          <LoginError error={emailError} dataCy="emailError"></LoginError>
          <LoginInput
            inputRef={passwordRef}
            type="password"
            inputValue={password}
            inputFunction={setPassword}
            placeholder="Password"
            dataCy="password"
          ></LoginInput>
          <LoginError error={passwordError} dataCy="passwordError"></LoginError>
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
