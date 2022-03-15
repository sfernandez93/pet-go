import SearchImage from "../components/Search/SearchImage";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const Searchpet = () => {
  const { getFavoritesUid } = useContext(SearchContext);

  useEffect(() => {
    console.log("HEY")
    getFavoritesUid();
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <LogoIconBar></LogoIconBar>
      <SearchImage></SearchImage>
      <NavBar></NavBar>
    </div>
  );
};
export default Searchpet;
