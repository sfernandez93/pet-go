import { useContext } from "react";

import SignIn from "./views/Login";
import { LoginContext } from "./context/LoginContext";
import Home from "./views/Home";
import UploadPet from "./views/UploadPet";
import SearchPet from "./views/SearchPet";
import FavoritePets from "./views/FavoritePets";
import DetailsPet from "./views/DetailsPet";
import { Routes, Route } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(LoginContext);

  if (!isLoggedIn) return <SignIn />;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<UploadPet />} />
      <Route path="/search" element={<SearchPet />} />
      <Route path="/favorites" element={<FavoritePets />} />
      <Route path="/detail/:uidPet" element={<DetailsPet />} />
    </Routes>
  );
}

export default App;
