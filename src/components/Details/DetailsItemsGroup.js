import DetailsItem from "./DetailsItem";
import { useContext } from "react";
import { DetailsContext } from "../../context/DetailsContext";

const DetailsItemsGroup = () => {
  const { detailPet } = useContext(DetailsContext);
  return (
    <div className="w-11/12 flex flex-col divide-y mt-10 mb-10">
      <DetailsItem
        itemName={"Nombre"}
        itemProp={detailPet ? detailPet.name : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Raza"}
        itemProp={detailPet ? detailPet.race : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Edad"}
        itemProp={detailPet ? detailPet.age : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Provincia"}
        itemProp={detailPet ? detailPet.region : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Población"}
        itemProp={detailPet ? detailPet.city : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Teléfono"}
        itemProp={detailPet ? detailPet.phone : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Email"}
        itemProp={detailPet ? detailPet.email : ""}
      ></DetailsItem>
      <DetailsItem
        itemName={"Fecha publicación"}
        itemProp={detailPet ? detailPet.timeElapsedSincePublication : ""}
      ></DetailsItem>
    </div>
  );
};
export default DetailsItemsGroup;
