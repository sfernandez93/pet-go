const DetailsOrgName = ({ petOrgName }) => {
  return (
    <p className="w-2/4 font-semibold p-2 text-sm text-gray-500">
      {" "}
      subido por {" "}
      <a href="#" className="text-blue-500 hover:text-blue-700">
        {" "}
        {petOrgName}{" "}
      </a>{" "}
    </p>
  );
};
export default DetailsOrgName;
