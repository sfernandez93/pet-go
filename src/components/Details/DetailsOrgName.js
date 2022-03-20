const DetailsOrgName = ({ petOrgName }) => {
  return (
    <p className="w-2/4 font-semibold p-2 text-sm text-gray-500">
      {" "}
      Subido por{" "}
      <div className="text-lightseagreen hover:text-blue-700">
        {" "}
        {petOrgName}{" "}
      </div>{" "}
    </p>
  );
};
export default DetailsOrgName;
