import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const SignInUpButton = () => {
  const { hasAccount, handleSignUp, handleLogin, email, password } = useContext(LoginContext);

  const handleSignUpWithEmailAndPassword = () => {
    handleSignUp(email, password);
  };

  const handleLoginWithEmailAndPassword = () => {
    handleLogin(email, password);
  };

  return (
    <button
      className="text-sm text-center bg-marine-green text-white py-1 rounded font-medium"
      onClick={
        hasAccount
          ? handleLoginWithEmailAndPassword
          : handleSignUpWithEmailAndPassword
      }
    >
      {hasAccount ? "Sign in" : "Sign up"}
    </button>
  );
};
export default SignInUpButton;
