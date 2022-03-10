import { useContext } from "react";

import Home from "./components/Home";
import SignIn from "./views/Login";
import { LoginContext } from "./context/LoginContext";
import UploadPet from "./views/UploadPet";
import SearchPet from "./views/SearchPet";
import FavoritePets from "./views/FavoritePets";

function App() {
  const { user } = useContext(LoginContext);

  // return <div className="App">{user ? <UploadPet /> : <SignIn />}</div>;
  // return <UploadPet />;
  // return <SearchPet />;
  return<FavoritePets/>
}

export default App;
