import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchImage from "../components/Search/SearchImage";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const Searchpet = () => {
  const { getDataFromPetsDatabase, dataPets } = useContext(SearchContext);

  useEffect(() => {
    if (dataPets.length < 1) getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
