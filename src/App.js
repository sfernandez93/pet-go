import { useContext } from "react";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { TodoContext } from './context/TodoContext';
import {getLocalStorage} from './localStorage';

function App() {
  const {user} = useContext(TodoContext);

  console.log(user);
  const userRegister = user ? user : getLocalStorage('userData'); 
  console.log(getLocalStorage('userData'));

  return(
    <div className="App">
      {user ? <Home />: <SignIn />
      }
    </div>
  ) 
  // <div className="App">{isLoggedIn ? <Home /> : <SignIn setUser = {setUser} />}</div>;
  // if (!isLoggedIn) return <LoginButton onClick={handleLogin} />;
  // return (
  //   <div className="app">
      
  //   </div>
  // );
}

export default App;
