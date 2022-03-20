import DetailsContactButton from "./DetailsContactButton";
import DetailsSendEmailButton from "./DetailsSendEmailButton";
import { getLocalStorage } from "../../localStorage";

import { useContext } from "react";
import { DetailsContext } from "../../context/DetailsContext";

const DetailsContactButtons = () => {
  const storedData = getLocalStorage("userData");
  const { detailPet } = useContext(DetailsContext);

  return (
    <div className="w-3/4 pb-24">
      <DetailsSendEmailButton
        fromEmail={storedData.email}
        namePet={detailPet ? detailPet.name : ""}
        agePet={detailPet ? detailPet.age : ""}
        racePet={detailPet ? detailPet.race : ""}
      ></DetailsSendEmailButton>
      <DetailsContactButton
        bgColor={"white"}
        textColor={"gray-700"}
        buttomName={"Enviar un correo"}
        modoContacto={detailPet ? `mailto:${detailPet.email}` : ""}
      ></DetailsContactButton>
      <DetailsContactButton
        bgColor={"primary"}
        textColor={"white"}
        buttomName={"Llamar"}
        modoContacto={detailPet ? `tel:${detailPet.phone}` : ""}
      ></DetailsContactButton>
    </div>
  );
};
export default DetailsContactButtons;
