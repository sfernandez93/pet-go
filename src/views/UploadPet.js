import UploadInput from "../components/Upload/UploadInput";
import UploadTextArea from "../components/Upload/UploadTextArea";
import UploadCheckbox from "../components/Upload/UploadCheckbox";
import UploadSubmitButton from "../components/Upload/UploadSubmitButton";
import UploadPhoto from "../components/Upload/UploadPhoto";
import UploadProfilePhoto from "../components/Upload/UploadProfilePhoto";
import { useContext, useEffect } from "react";
import { UploadContext } from "../context/UploadContext";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const UploadPet = () => {
  const {
    firstNameRef,
    raceRef,
    ageRef,
    emailRef,
    phoneRef,
    detailsRef,
    streetAdressRef,
    cityRef,
    regionRef,
    postalCodeRef,
    isDisabledRef,
    clearInputs,
  } = useContext(UploadContext);

  useEffect(() => {
    clearInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="absolute top-0 left-0 w-full">
      <LogoIconBar></LogoIconBar>
      <div className="mt-16 px-4 py-6 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <UploadInput
            inputTitle="Nombre"
            inputName="first-name"
            inputType="text"
            inputAutocomplLogoIconBarete="given-name"
            inputRef={firstNameRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Raza"
            inputName="race"
            inputType="text"
            inputAutocomplete="family-name"
            inputRef={raceRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Edad"
            inputName="age"
            inputType="number"
            inputAutocomplete="age"
            inputRef={ageRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Email"
            inputName="email-address"
            inputType="email"
            inputAutocomplete="email"
            inputRef={emailRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Teléfono/Móvil"
            inputName="phone"
            inputType="text"
            inputAutocomplete="phone"
            inputRef={phoneRef}
          ></UploadInput>

          <UploadTextArea
            title="Acerca de"
            inputName="about"
            inputPlaceholder="Breve descripción de tu mascota"
            inputRef={detailsRef}
          ></UploadTextArea>

          {/* <UploadProfilePhoto></UploadProfilePhoto> */}
          <UploadPhoto></UploadPhoto>

          <UploadInput
            inputTitle="Dirección"
            inputName="street-address"
            inputType="text"
            inputAutocomplete="street-address"
            inputRef={streetAdressRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Ciudad"
            inputName="city"
            inputType="text"
            inputAutocomplete="address-level2"
            inputRef={cityRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Provincia"
            inputName="region"
            inputType="text"
            inputAutocomplete="address-level1"
            inputRef={regionRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Código Postal"
            inputName="postal-code"
            inputType="text"
            inputAutocomplete="postal-code"
            inputRef={postalCodeRef}
          ></UploadInput>
          <UploadCheckbox
            inputTitle="Modo ayúdame"
            inputName="comments"
            inputDescription="Indica si tu mascota tiene algún tipo de discapacidad (detállalo
                en la descripción)."
            inputRef={isDisabledRef}
          ></UploadCheckbox>
        </div>
      </div>
      <UploadSubmitButton></UploadSubmitButton>
      <NavBar></NavBar>
    </form>
  );
};
export default UploadPet;
