import { useContext } from "react";

import SignIn from "./views/Login";
import { LoginContext } from "./context/LoginContext";
import UploadPet from "./views/UploadPet";
import SearchPet from "./views/SearchPet";
import FavoritePets from "./views/FavoritePets";
import DetailsPet from "./views/DetailsPet";
import { Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(LoginContext);

  return (
    <Routes>
      {/* {user ? (
        <Route path="/upload" element={<UploadPet />} />
      ) : (
        <Route path="/" element={<SignIn />} />
      )} */}

      <Route path="/" element={<UploadPet />} />
      <Route path="/search" element={<SearchPet />} />
      <Route path="/favorites" element={<FavoritePets />} />
      <Route path="/detail" element={<DetailsPet />} />
    </Routes>
  );
}

export default App;
