const UploadSubmitButton = () => {
  return (
    <div className="bg-white mb-16 px-4 py-3 text-right sm:px-6">
      <button
        type="submit"
        className="w-full bg-primary inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
        data-cy="uploadButton"
      >
        Guardar
      </button>
    </div>
  );
};
export default UploadSubmitButton;
