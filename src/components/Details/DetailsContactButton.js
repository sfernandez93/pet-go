const DetailsContactButton = ({ bgColor, buttomName, modoContacto }) => {
  return (
    <div className="mt-5">
      <a
        href={modoContacto}
        className={`border rounded-full ${bgColor} py-2 px-4 text-xs font-semibold text-gray-700`}
      >
        {buttomName}
      </a>
    </div>
  );
};
export default DetailsContactButton;
