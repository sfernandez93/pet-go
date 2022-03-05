import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const { signOutAccount } = useContext(TodoContext);

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
