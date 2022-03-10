import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { FaHeart, FaSadTear } from "react-icons/fa";
import SearchPhoto from "../components/Search/SearchPhoto";
import SearchButton from "../components/Search/SearchButton";

const Searchpet = () => {
  const { getDataFromPetsDatabase, incrementIndexImage, savePetAsFavorite } =
    useContext(SearchContext);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchPhoto></SearchPhoto>
      <div className="p-4 flex justify-center">
        <SearchButton
          onClickFunction={incrementIndexImage}
          iconComponent={<FaSadTear size={50} style={{ fill: "black" }} />}
        ></SearchButton>
        <SearchButton
          onClickFunction={savePetAsFavorite}
          iconComponent={<FaHeart size={50} style={{ fill: "white" }} />}
        ></SearchButton>
      </div>
    </div>
  );
};
export default Searchpet;
