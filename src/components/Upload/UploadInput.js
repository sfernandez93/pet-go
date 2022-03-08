
const UploadInput = ({ inputTitle, inputName, inputType, inputAutocomplete, inputRef }) => {
    return (
        <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={inputName}
          className="block text-sm font-medium text-gray-500"
        >
          {inputTitle}
        </label>
        <input
          ref = {inputRef}
          type={inputType}
          name={inputName}
          id={inputName}
          autoComplete={inputAutocomplete}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        ></input>
      </div>
    );
  };
  export default UploadInput;
  