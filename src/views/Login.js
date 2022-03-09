import 
{ useRef, useContext } from "react";

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
    <div>
      <div className="gradient-background w-80 py-8 flex items-center flex-col mb-3">
        <div className="mt-8 w-64 flex flex-col">
          <LoginInput
            inputRef={emailRef}
            type={"email"}
            inputValue={email}
            inputFunction={setEmail}
            placeholder={"Email"}
          ></LoginInput>
          <LoginError error={emailError}></LoginError>
          <LoginInput
            inputRef={passwordRef}
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
