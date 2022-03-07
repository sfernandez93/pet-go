import { useContext } from "react";

import Home from "./components/Home";
import SignIn from "./views/Login";
import { LoginContext } from "./context/LoginContext";
import UploadPet from "./views/UploadPet"

function App() {
  const { user } = useContext(LoginContext);

  // return <div className="App">{user ? <UploadPet /> : <SignIn />}</div>;
  return <UploadPet />;

}

export default App;
