const DetailsOrgName = ({ petOrgName }) => {
  return (
    <p className="w-2/4 font-semibold p-2 text-sm text-gray-500">
      {" "}
      subido por{" "}
      <div className="text-blue-500 hover:text-blue-700">
        {" "}
        {petOrgName}{" "}
      </div>{" "}
    </p>
  );
};
export default DetailsOrgName;
