
const DetailsContactButton = ({ bgColor, buttomName, modoContacto }) => {
  return (
    <div className={`w-full mt-3 border rounded-full ${bgColor} py-2 px-4 text-xs font-semibold text-gray-700`}>
      <a
        href={modoContacto}
      >
        {buttomName}
      </a>
    </div>
  );
};
export default DetailsContactButton;
