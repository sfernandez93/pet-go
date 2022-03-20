import { useContext } from "react";
import { DetailsContext } from "../../context/DetailsContext";

const DetailsFeatures = () => {
  const { features } = useContext(DetailsContext);

  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      {[...features].map((key, i) => (
        <div
          key={i}
          className="flex font-medium justify-center items-center h-8 px-4 text-xs leading-3 text-white rounded-full bg-primary opacity-70"
        >
          {key}
        </div>
      ))}
    </div>
  );
};
export default DetailsFeatures;
