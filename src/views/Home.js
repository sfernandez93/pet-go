import SearchPet from "./SearchPet";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Home = () => {
  const { signOutAccount } = useContext(LoginContext);

  const handleSignOut = async () => {
    signOutAccount();
  };

  return (
    <div>
      <SearchPet></SearchPet>
      <button onClick={handleSignOut}>Signout</button>
    </div>
  );
};
export default Home;
