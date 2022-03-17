import UploadFeatures from "../Upload/UploadFeatures";
import SearchAdvancedSelector from "../Search/SearchAdvancedSelector";

const SearchFilters = () => {
  return (
    <div className="absolute flex flex-col items-center w-full mt-24 p-4 shadow rounded bg-transparentbg ">
      <SearchAdvancedSelector
        selectorTitle="Provincia"
        selectorName="region"
      ></SearchAdvancedSelector>
      <UploadFeatures></UploadFeatures>
      <button className="w-40 mt-3 border rounded-full bg-blue-100 py-2 px-4 font-semibold text-white">
        Buscar
      </button>
    </div>
  );
};

export default SearchFilters;
