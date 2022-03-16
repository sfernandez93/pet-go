const UploadSelector = () => {
  return (
    // <div className="col-span-6 sm:col-span-3">
    //   <label
    //     htmlFor="provincia"
    //     className="block text-sm font-medium text-gray-500"
    //   >
    //     Provincia
    //   </label>
    //   <select
    //     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    //     aria-label="Default select example"
    //   >
    //                       <div class="cursor-pointer w-full border-gray-100 rounded-t border-b 
    //         hover:bg-teal-100" >
    //                 <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
    //                     <div class="w-full items-center flex">
    //                         <option class="mx-2 leading-6  ">Python </option>
    //                     </div>
    //                 </div>
    //             </div>
    //     <option selected></option>
    //     <option value="1">One</option>
    //     <option value="2">Two</option>
    //     <option value="3">Three</option>
    //   </select>
    // </div>
    <div class="col-span-6 sm:col-span-3">
  <label id="listbox-label" class="block text-sm font-medium text-gray-700"> Assigned to </label>
  <div class="mt-1 relative">
    <button type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span class="flex items-center">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"></img>
        <span class="ml-3 block truncate"> Tom Cook </span>
      </span>
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>
    <ul class="hidden absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      <li class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" id="listbox-option-0" role="option">
        <div class="flex items-center">
          <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"></img>
          <span class="font-normal ml-3 block truncate"> Wade Cooper </span>
        </div>
        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </span>
      </li>

    </ul>
  </div>
</div>
  );
};
export default UploadSelector;
