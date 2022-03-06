import { useContext } from "react";

import Home from "./components/Home";
import SignIn from "./views/SignIn";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { user } = useContext(LoginContext);

  return <div className="App">{user ? <Home /> : <SignIn />}</div>;
}

export default App;
