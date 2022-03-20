import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import { FaHeart, FaForward } from "react-icons/fa";
import SearchImageButton from "./SearchImageButton";
import SearchDetailsLink from "./SearchDetailsLink";

const SearchImageButtons = () => {
  const { handleIncrement, dataPets, handleSaveAsFavorite, photoIndex } =
    useContext(SearchContext);

  return (
    <div className="flex justify-between px-10 py-6">
      <SearchDetailsLink
        dataPets={dataPets}
        photoIndex={photoIndex}
      ></SearchDetailsLink>

      <SearchImageButton
        clickFunction={() => handleIncrement(dataPets[photoIndex])}
        icon={<FaForward size={20} style={{ fill: "gainsboro" }} />}
      ></SearchImageButton>
      <SearchImageButton
        clickFunction={() => handleSaveAsFavorite(dataPets[photoIndex])}
        icon={
          <FaHeart
            size={20}
            style={{ fill: "red" }}
            className=" hover:shadow-2xl transition duration-200 transform hover:scale-150 cursor-pointers"
          />
        }
      ></SearchImageButton>
    </div>
  );
};

export default SearchImageButtons;
