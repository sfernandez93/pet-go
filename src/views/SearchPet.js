import SearchImage from "../components/Search/SearchImage";
import SearchAdvanced from "../components/Search/SearchAdvanced";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const Searchpet = () => {
  const {
    dataPets,
    photoIndex,
    setPhotoIndex,
    getData,
    isFinish,
    setIsFinish,
    formValues,
    setFormValues,
    setIsAdvancedSearch,
    isAdvancedSearch,
  } = useContext(SearchContext);

  useEffect(() => {
    setIsAdvancedSearch(false);
    setFormValues({});
    if (photoIndex === 0) getData({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAdvancedSearch) setFormValues({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdvancedSearch]);

  useEffect(() => {
    if (isFinish) getData(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinish]);

  useEffect(() => {
    if (photoIndex && photoIndex > dataPets.length - 1) {
      setPhotoIndex(0);
      setIsFinish(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoIndex]);

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
