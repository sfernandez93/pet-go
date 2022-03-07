import UploadPhoto from "../components/Upload/UploadPhoto";

const UploadPet = () => {
  return (
    // <UploadPhoto></UploadPhoto>
    <form className="absolute top-0 left-0 w-full">
      <div className="px-4 py-6 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              className="block text-sm font-medium text-gray-500"
            >
              Nombre
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="race"
              className="block text-sm font-medium text-gray-500"
            >
              Raza
            </label>
            <input
              type="text"
              name="race"
              id="race"
              autocomplete="family-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="age"
              className="block text-sm font-medium text-gray-500"
            >
              Edad
            </label>
            <input
              type="text"
              name="age"
              id="age"
              autocomplete="family-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              for="email-address"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="text"
              name="email-address"
              id="email-address"
              autocomplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              for="phone"
              className="block text-sm font-medium text-gray-500"
            >
              Teléfono/Móvil
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="about"
              className="block text-sm font-medium text-gray-500"
            >
              {" "}
              Acerca de{" "}
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder=" Breve descripción de tu mascota"
              ></textarea>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-500">
              {" "}
              Foto Perfil{" "}
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-500">
              {" "}
              Fotos{" "}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    ></input>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <label
              for="street-address"
              className="block text-sm font-medium text-gray-500"
            >
              Dirección
            </label>
            <input
              type="text"
              name="street-address"
              id="street-address"
              autocomplete="street-address"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              for="city"
              className="block text-sm font-medium text-gray-500"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              for="region"
              className="block text-sm font-medium text-gray-500"
            >
              Provincia
            </label>
            <input
              type="text"
              name="region"
              id="region"
              autocomplete="address-level1"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              for="postal-code"
              className="block text-sm font-medium text-gray-500"
            >
              Código Postal
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autocomplete="postal-code"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>
          <div class="flex items-start col-span-6 sm:col-span-3 lg:col-span-2 ">
            <div class="flex items-center h-5">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              ></input>
            </div>
            <div class="ml-3 text-sm">
              <label for="comments" class="font-medium text-gray-700">
                Modo ayúdame
              </label>
              <p class="text-gray-500">
                Indica si tu mascota tiene algún tipo de discapacidad (indícalo en la descripción).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
export default UploadPet;
