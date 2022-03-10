const SearchButton = ({ onClickFunction, iconComponent }) => {
  return (
    <button
      onClick={onClickFunction}
      type="button"
      className="inline-flex items-center justify-center w-20 h-20 mr-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80"
    >
      {iconComponent}
    </button>
  );
};
export default SearchButton;
