import SearchImage from "../components/Search/SearchImage";
import SearchAdvanced from "../components/Search/SearchAdvanced";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const Searchpet = () => {
  const { getData, setIsAdvancesSearch } = useContext(SearchContext);

  useEffect(() => {
    setIsAdvancesSearch(false)
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <LogoIconBar></LogoIconBar>
      <SearchAdvanced></SearchAdvanced>
      <SearchImage></SearchImage>
      <NavBar></NavBar>
    </div>
  );
};
export default Searchpet;
