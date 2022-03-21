const DetailsContactButton = ({ bgColor, textColor, buttomName, modoContacto, clickFunction, isClicked }) => {
  return (
    <button onClick={clickFunction}
      className={`w-full mt-3 border rounded-full bg-${bgColor} py-2 px-4 text-xs font-semibold text-${textColor} cursor-pointer ${isClicked ? 'bg-gray-100': ''}`}
    >
      <a className= 'block' href={modoContacto}>{buttomName}</a>
    </button>
  );
};
export default DetailsContactButton;
