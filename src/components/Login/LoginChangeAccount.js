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
            ¿No tienes una cuenta?{" "}
            <span
              className="text-blue-900 text-sm font-semibold"
              onClick={() => setHasAccount(!hasAccount)}
              data-cy="change-to-register"
            >
              {" "}
              Regístrate
            </span>
          </p>
        </>
      ) : (
        <>
          <p>
           ¿Tienes una cuenta?{" "}
            <span
              className="text-blue-900 text-sm font-semibold"
              onClick={() => setHasAccount(!hasAccount)}
              data-cy="change-to-login"
            >
              Accede
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default LoginChangeAccount;
