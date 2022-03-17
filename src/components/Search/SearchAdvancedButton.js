import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { FaAngleDown } from "react-icons/fa";

const SearchAdvanced = () => {
  const { dropdownHandler } = useContext(SearchContext);

  return (
      <button
        className="flex items-center justify-center absolute w-full mt-16 h-4 hover:h-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-100 w-64 shadow rounded bg-white cursor-pointer"
        onClick={dropdownHandler}
      >
        <FaAngleDown size={20} style={{ fill: "gainsboro" }} />
      </button>
  );
};

export default SearchAdvanced;
