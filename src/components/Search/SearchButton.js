const SearchButton = ({
  onClickFunction,
  iconComponent,
  sizeBorder,
  colorBorder,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`w-${sizeBorder} h-${sizeBorder} border-solid border-2 border-${colorBorder} rounded-full flex items-center justify-center`}
    >
      <div class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
        {iconComponent}
      </div>
    </button>
  );
};
export default SearchButton;
