import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import "./style.css";

const SignInGoogleButton = () => {
  const { handleLoginWithGoogle } = useContext(LoginContext);

  return (
    <button className="mt-4 flex" onClick={handleLoginWithGoogle}>
      <div className="bg-no-repeat google-logo mr-1"></div>
      <span className="text-xs text-blue-900 font-semibold">
        Log in with Google
      </span>
    </button>
  );
};
export default SignInGoogleButton;
