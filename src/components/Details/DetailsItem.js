const DetailsItem = ({ itemName, itemProp }) => {
  return (
    <div className="flex justify-between p-4 text-xs">
      <div className="text-gray-600 font-medium text-start">{itemName}</div>
      <div className="text-gray-300">{itemProp}</div>
    </div>
  );
};
export default DetailsItem;
