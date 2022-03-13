const DetailsItem = ({itemName, itemProp}) => {
  return (
    <div className="flex justify-between p-4 ">
      <div className="text-gray-600">{itemName}</div>
      <div className="text-gray-300">{itemProp}</div>
    </div>
  );
};
export default DetailsItem;
