const UploadTextArea = ({ title, inputName, inputPlaceholder, inputRef }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-500"
      >
        {title}
      </label>
      <div className="mt-1">
        <textarea
          required
          maxLength="100"
          id={inputName}
          name={inputName}
          rows="3"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder={inputPlaceholder}
          ref={inputRef}
        ></textarea>
      </div>
    </div>
  );
};
export default UploadTextArea;
