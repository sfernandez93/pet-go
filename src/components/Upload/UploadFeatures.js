import UploadCheckboxFeature from "./UploadCheckboxFeature";

const UploadFeatures = ({ handleChange, textColor }) => {
  return (
    <div className="grid grid-cols-3 gap-3 py-10">
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Activo"
        inputName="is_active"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Tranquilo"
        inputName="is_quiet"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Cariñoso"
        inputName="is_loving"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro pequeño"
        inputName="is_small"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro grande"
        inputName="is_big"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Juguetón"
        inputName="is_playful"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Dócil"
        inputName="is_docile"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Sociable"
        inputName="is_sociable"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Entrenable"
        inputName="is_trainable"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro guía"
        inputName="is_guide"
        textColor={textColor}
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Apto alérgicos"
        inputName="is_notalergic"
        textColor={textColor}
      ></UploadCheckboxFeature>
    </div>
  );
};
export default UploadFeatures;
