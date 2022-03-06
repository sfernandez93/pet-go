import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./style.css";

const Home = () => {
  const { signOutAccount } = useContext(LoginContext);

  const handleSignOut = async () => {
    signOutAccount();
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <p>
        <button onClick={handleSignOut}>Signout</button>
      </p>
    </div>
  );
};
export default Home;
