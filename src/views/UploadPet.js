import UploadInput from "../components/Upload/UploadInput";
import UploadTextArea from "../components/Upload/UploadTextArea";
import UploadCheckbox from "../components/Upload/UploadCheckbox";
import UploadSubmitButton from "../components/Upload/UploadSubmitButton";
import UploadPhoto from "../components/Upload/UploadPhoto";
import UploadProfilePhoto from "../components/Upload/UploadProfilePhoto";

const UploadPet = () => {
  return (
    <form className="absolute top-0 left-0 w-full">
      <div className="px-4 py-6 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <UploadInput
            inputTitle="Nombre"
            inputName="first-name"
            inputType="text"
            inputAutocomplete="given-name"
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
            inputType="text"
            inputAutocomplete="age"
          ></UploadInput>
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

          <UploadTextArea
            title="Acerca de"
            inputName="about"
            inputPlaceholder="Breve descripción de tu mascota"
          ></UploadTextArea>

          {/* <UploadProfilePhoto></UploadProfilePhoto> */}
          <UploadPhoto></UploadPhoto>

          <UploadInput
            inputTitle="Dirección"
            inputName="street-address"
            inputType="text"
            inputAutocomplete="street-address"
          ></UploadInput>
          <UploadInput
            inputTitle="Ciudad"
            inputName="city"
            inputType="text"
            inputAutocomplete="address-level2"
          ></UploadInput>
          <UploadInput
            inputTitle="Provincia"
            inputName="region"
            inputType="text"
            inputAutocomplete="address-level1"
          ></UploadInput>
          <UploadInput
            inputTitle="Código Postal"
            inputName="postal-code"
            inputType="text"
            inputAutocomplete="postal-code"
          ></UploadInput>
          <UploadCheckbox
            inputTitle="Modo ayúdame"
            inputName="comments"
            inputDescription="Indica si tu mascota tiene algún tipo de discapacidad (detállalo
                en la descripción)."
          ></UploadCheckbox>
        </div>
      </div>
      <UploadSubmitButton></UploadSubmitButton>
    </form>
  );
};
export default UploadPet;
