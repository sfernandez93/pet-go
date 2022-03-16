import UploadCheckboxFeature from "./UploadCheckboxFeature";

const UploadFeatures = () => {
  return (
    <div className="grid grid-cols-3 gap-3 py-10">
      <UploadCheckboxFeature
        inputTitle="Activo"
        inputName="is_active"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Tranquilo"
        inputName="is_quiet"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Cariñoso"
        inputName="is_loving"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Perro pequeño"
        inputName="is_small"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Perro grande"
        inputName="is_big"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Juguetón"
        inputName="is_playful"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Dócil"
        inputName="is_docile"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Sociable"
        inputName="is_sociable"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Entrenable"
        inputName="is_trainable"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Perro guía"
        inputName="is_guide"
      ></UploadCheckboxFeature>
      <UploadCheckboxFeature
        inputTitle="Apto alérgicos"
        inputName="is_notalergic"
      ></UploadCheckboxFeature>
    </div>
  );
};
export default UploadFeatures;
