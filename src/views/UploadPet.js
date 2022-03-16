import UploadInput from "../components/Upload/UploadInput";
import UploadTextArea from "../components/Upload/UploadTextArea";
import UploadCheckbox from "../components/Upload/UploadCheckbox";
import UploadFeatures from "../components/Upload/UploadFeatures";
import UploadSubmitButton from "../components/Upload/UploadSubmitButton";
import UploadPhoto from "../components/Upload/UploadPhoto";
import UploadProfilePhoto from "../components/Upload/UploadProfilePhoto";
import UploadSelector from "../components/Upload/UploadSelector";
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
    orgNameRef,
    cityRef,
    regionRef,
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

          <UploadTextArea
            title="Acerca de"
            inputName="about"
            inputPlaceholder="Breve descripción de tu mascota"
            inputRef={detailsRef}
          ></UploadTextArea>

          <UploadPhoto></UploadPhoto>
        </div>

        <UploadFeatures></UploadFeatures>
        <UploadCheckbox
          inputTitle="Modo ayúdame"
          inputName="comments"
          inputDescription="Indica si tu mascota tiene algún tipo de problema o discapacidad (detállalo
                en la descripción)."
          inputRef={isDisabledRef}
        ></UploadCheckbox>
      </div>

      <div className="mt-4 px-4 py-6 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <UploadInput
            inputTitle="Nombre organización"
            inputName="org-name"
            inputType="text"
            inputAutocomplete="orgName"
            inputRef={orgNameRef}
          ></UploadInput>
          {/* <UploadProfilePhoto></UploadProfilePhoto> */}

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
          <UploadSelector></UploadSelector>

          <UploadInput
            inputTitle="Provincia"
            inputName="region"
            inputType="text"
            inputAutocomplete="address-level1"
            inputRef={regionRef}
          ></UploadInput>
          <UploadInput
            inputTitle="Ciudad"
            inputName="city"
            inputType="text"
            inputAutocomplete="address-level2"
            inputRef={cityRef}
          ></UploadInput>
        </div>
      </div>

      <UploadSubmitButton></UploadSubmitButton>
      <NavBar></NavBar>
    </form>
  );
};
export default UploadPet;
