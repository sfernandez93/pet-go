const DetailsItem = ({itemName, itemProp}) => {
  return (
    <div className="flex justify-between ">
      <div className="text-gray-600">{itemName}</div>
      <div>{itemProp}</div>
    </div>
  );
};
export default DetailsItem;
