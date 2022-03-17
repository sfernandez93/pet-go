import UploadCheckboxFeature from "./UploadCheckboxFeature";

const UploadFeatures = ({ handleChange }) => {
  return (
    <div className="grid grid-cols-3 gap-3 py-10">
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Activo"
        inputName="is_active"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Tranquilo"
        inputName="is_quiet"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Cariñoso"
        inputName="is_loving"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro pequeño"
        inputName="is_small"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro grande"
        inputName="is_big"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Juguetón"
        inputName="is_playful"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Dócil"
        inputName="is_docile"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Sociable"
        inputName="is_sociable"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Entrenable"
        inputName="is_trainable"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Perro guía"
        inputName="is_guide"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        onChangeFunction={handleChange}
        inputTitle="Apto alérgicos"
        inputName="is_notalergic"
      ></UploadCheckboxFeature>
    </div>
  );
};
export default UploadFeatures;
