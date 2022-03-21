const DetailsContactButton = ({ bgColor, textColor, buttomName, modoContacto }) => {
  return (
    <div
      className={`w-full mt-3 border rounded-full bg-${bgColor} py-2 px-4 text-xs font-semibold text-${textColor} hover:opacity-40 cursor-pointer`}
    >
      <a className= 'block' href={modoContacto}>{buttomName}</a>
    </div>
  );
};
export default DetailsContactButton;
