import UploadInput from "../components/Upload/UploadInput";
import UploadTextArea from "../components/Upload/UploadTextArea";
import UploadCheckbox from "../components/Upload/UploadCheckbox";
import UploadFeatures from "../components/Upload/UploadFeatures";
import UploadSubmitButton from "../components/Upload/UploadSubmitButton";
import UploadPhoto from "../components/Upload/UploadPhoto";
import UploadSelector from "../components/Upload/UploadSelector";
import { useContext, useEffect } from "react";
import { UploadContext } from "../context/UploadContext";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const UploadPet = () => {
  const { clearInputs, writeData, handleChange } = useContext(UploadContext);

  useEffect(() => {
    clearInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={writeData} className="absolute top-0 left-0 w-full">
      <LogoIconBar></LogoIconBar>
      <div className="mt-16 px-4 py-6 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <UploadInput
            inputTitle="Nombre"
            inputName="first-name"
            inputType="text"
            inputAutocomplLogoIconBarete="given-name"
          ></UploadInput>
          <UploadInput
            inputTitle="Raza"
            inputName="race"
            inputType="text"
            inputAutocomplete="family-name"
          ></UploadInput>
          <UploadInput
            inputTitle="Edad"
            inputName="age"
            inputType="number"
            inputAutocomplete="age"
          ></UploadInput>

          <UploadTextArea
            title="Acerca de"
            inputName="about"
            inputPlaceholder="Breve descripción de tu mascota"
          ></UploadTextArea>

          <UploadPhoto></UploadPhoto>
        </div>

        <UploadFeatures
          handleChange={handleChange}
          textColor="gray-600"
        ></UploadFeatures>
        <UploadCheckbox
          handleChange={handleChange}
          inputTitle="Modo ayuda"
          inputName="is_disabled"
          inputDescription="Indica si tu mascota tiene algún tipo de problema o discapacidad (detállalo
                en la descripción)."
          textColor="gray-700"
          textColorDescription="gray-500"
        ></UploadCheckbox>
      </div>

      <div className="px-4 pb-6 pt-12 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <UploadInput
            inputTitle="Organización"
            inputName="org-name"
            inputType="text"
            inputAutocomplete="orgName"
          ></UploadInput>
          {/* <UploadProfilePhoto></UploadProfilePhoto> */}

          <UploadInput
            inputTitle="Email"
            inputName="email-address"
            inputType="email"
            inputAutocomplete="email"
          ></UploadInput>
          <UploadInput
            inputTitle="Teléfono/Móvil"
            inputName="phone"
            inputType="text"
            inputAutocomplete="phone"
          ></UploadInput>
          <UploadSelector
            selectorTitle="Provincia"
            selectorName="region"
          ></UploadSelector>

          <UploadInput
            inputTitle="Población"
            inputName="city"
            inputType="text"
            inputAutocomplete="address-level2"
          ></UploadInput>
        </div>
      </div>

      <UploadSubmitButton></UploadSubmitButton>
      <NavBar></NavBar>
    </form>
  );
};
export default UploadPet;
