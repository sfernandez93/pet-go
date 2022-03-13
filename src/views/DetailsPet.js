import { SearchContext } from "../context/SearchContext";
import { useContext, useEffect } from "react";
import DetailsPhoto from "../components/Details/DetailsPhoto";
import DetailsDescription from "../components/Details/DetailsDescription";
import DetailsName from "../components/Details/DetailsName";
import DetailsItem from "../components/Details/DetailsItem";
import DetailsContactButton from "../components/Details/DetailsContactButton";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";

const DetailsPets = () => {
  const { indexImages, petsAllData, getDataFromPetsDatabase } =
    useContext(SearchContext);

  useEffect(() => {
    getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(petsAllData[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petsAllData]);

  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div >
              <LogoIconBar></LogoIconBar>
        <div id="viewerButton" className="hidden w-full flex justify-center">
          <button className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
            Open Quick View
          </button>
        </div>
        <div
          id="viewerBox"
          className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
        >
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
            <DetailsPhoto
              photo={
                petsAllData.length > 0
                  ? petsAllData[0].imagesUrl[
                      Object.keys(petsAllData[0].imagesUrl)[0]
                    ]
                  : ""
              }
            ></DetailsPhoto>
            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <DetailsName
                petName={petsAllData.length > 0 ? petsAllData[0].name : ""}
              ></DetailsName>
              <DetailsDescription
                description={
                  petsAllData.length > 0 ? petsAllData[0].details : ""
                }
              ></DetailsDescription>
              <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
              <div className="flex flex-col divide-y">
                <DetailsItem
                  itemName={"Raza"}
                  itemProp={petsAllData.length > 0 ? petsAllData[0].race : ""}
                ></DetailsItem>
                <DetailsItem
                  itemName={"Edad"}
                  itemProp={petsAllData.length > 0 ? petsAllData[0].age : ""}
                ></DetailsItem>
                <DetailsItem
                  itemName={"Ciudad"}
                  itemProp={petsAllData.length > 0 ? petsAllData[0].city : ""}
                ></DetailsItem>
              </div>
              <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                <DetailsContactButton
                  buttomName={"Llámanos"}
                  modoContacto={
                    petsAllData.length > 0 ? `tel:${petsAllData[0].phone}` : ""
                  }
                ></DetailsContactButton>
                <DetailsContactButton
                  buttomName={"Envía un correo"}
                  modoContacto={
                    petsAllData.length > 0
                      ? `mailto:${petsAllData[0].email}`
                      : ""
                  }
                ></DetailsContactButton>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <NavBar></NavBar>
    </div>

    // <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
    //   <img
    //     className="w-full h-56 object-cover object-center"
    //     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    //     alt="avatar"
    //   ></img>
    //   <div className="flex items-center px-6 py-3 bg-gray-900">
    //     <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
    //       <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
    //     </svg>
    //     <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
    //   </div>
    //   <div className="py-4 px-6">
    //     <h1 className="text-2xl font-semibold text-gray-800">
    //       Patterson johnson
    //     </h1>
    //     <p className="py-2 text-lg text-gray-700">
    //       Full Stack maker & UI / UX Designer , love hip hop music Author of
    //       Building UI.
    //     </p>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
    //         <g>
    //           <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
    //         </g>
    //       </svg>
    //       <h1 className="px-2 text-sm">MerakiTeam</h1>
    //     </div>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
    //       </svg>
    //       <h1 className="px-2 text-sm">California</h1>
    //     </div>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
    //       </svg>
    //       <h1 className="px-2 text-sm">patterson@example.com</h1>
    //     </div>
    //   </div>
    // </div>
  );
};
export default DetailsPets;
