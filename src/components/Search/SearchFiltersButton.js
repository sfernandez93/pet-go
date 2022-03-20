// import { FaPaw } from "react-icons/fa";

const SearchFiltersButton = () => {
  return (
    <div className="flex justify-center w-40 mt-6 border rounded-full bg-blue-100 py-2 px-4 font-semibold text-white">
      <input className="pr-2 font-bold" type="submit" value="Pet Go!"></input>
      {/* <FaPaw size={20} style={{ fill: "white" }} /> */}
    </div>
  );
};

export default SearchFiltersButton;
