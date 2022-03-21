import DetailsContactButton from "./DetailsContactButton";
import DetailsSendEmailButton from "./DetailsSendEmailButton";
import { getLocalStorage } from "../../localStorage";
import { useContext, useEffect } from "react";
import { DetailsContext } from "../../context/DetailsContext";

const DetailsContactButtons = () => {
  const storedData = getLocalStorage("userData");
  const { detailPet, setIsButtonEmailClicked, isButtonEmailClicked } =
    useContext(DetailsContext);

  useEffect(() => {
    if (isButtonEmailClicked.email)
      setTimeout(() => {
        setIsButtonEmailClicked((prevState) => ({
          ...prevState,
          email: false,
        }));
      }, 300);
    if (isButtonEmailClicked.call)
      setTimeout(() => {
        setIsButtonEmailClicked((prevState) => ({
          ...prevState,
          call: false,
        }));
      }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonEmailClicked]);

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
        clickFunction={() =>
          setIsButtonEmailClicked((prevState) => ({
            ...prevState,
            email: true,
          }))
        }
        isClicked={isButtonEmailClicked.email}
      ></DetailsContactButton>
      <DetailsContactButton
        bgColor={"primary"}
        textColor={"white"}
        buttomName={"Llamar"}
        modoContacto={detailPet ? `tel:${detailPet.phone}` : ""}
        clickFunction={() =>
          setIsButtonEmailClicked((prevState) => ({
            ...prevState,
            call: true,
          }))
        }
        isClicked={isButtonEmailClicked.call}
      ></DetailsContactButton>
    </div>
  );
};
export default DetailsContactButtons;
