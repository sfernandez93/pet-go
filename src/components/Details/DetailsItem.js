const DetailsItem = ({itemName, itemProp}) => {
  console.log(itemName)
  console.log(itemProp)

  return (
    <div className="flex justify-between p-4 text-xs">
      <div className="text-gray-600 font-medium">{itemName}</div>
      <div className="text-gray-300">{itemProp}</div>
    </div>
  );
};
export default DetailsItem;
