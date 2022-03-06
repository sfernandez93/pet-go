import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const LoginChangeAccount = () => {
  const { hasAccount, setHasAccount } = useContext(LoginContext);

  return (
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
  );
};
export default LoginChangeAccount;
