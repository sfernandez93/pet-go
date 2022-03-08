const UploadCheckbox = ({ inputTitle, inputName,  inputDescription, inputRef }) => {
    return (
        <div className="flex items-start col-span-6 sm:col-span-3 lg:col-span-2 ">
        <div className="flex items-center h-5">
          <input
            id={inputName}
            name={inputName}
            type="checkbox"
            ref={inputRef}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          ></input>
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            {inputTitle}
          </label>
          <p className="text-gray-500">
            {inputDescription}
          </p>
        </div>
      </div>
    );
  };
  export default UploadCheckbox;
  