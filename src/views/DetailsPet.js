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
    //   <div >
    //           <LogoIconBar></LogoIconBar>
    //     <div id="viewerButton" className="hidden w-full flex justify-center">
    //       <button className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
    //         Open Quick View
    //       </button>
    //     </div>
    //     <div
    //       id="viewerBox"
    //       className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
    //     >
    //       <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
    //         <DetailsPhoto
    //           photo={
    //             petsAllData.length > 0
    //               ? petsAllData[0].imagesUrl[
    //                   Object.keys(petsAllData[0].imagesUrl)[0]
    //                 ]
    //               : ""
    //           }
    //         ></DetailsPhoto>
    //         <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
    //           <DetailsName
    //             petName={petsAllData.length > 0 ? petsAllData[0].name : ""}
    //           ></DetailsName>
    //           <DetailsDescription
    //             description={
    //               petsAllData.length > 0 ? petsAllData[0].details : ""
    //             }
    //           ></DetailsDescription>
    //           <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
    //           <div className="flex flex-col divide-y">
    //             <DetailsItem
    //               itemName={"Raza"}
    //               itemProp={petsAllData.length > 0 ? petsAllData[0].race : ""}
    //             ></DetailsItem>
    //             <DetailsItem
    //               itemName={"Edad"}
    //               itemProp={petsAllData.length > 0 ? petsAllData[0].age : ""}
    //             ></DetailsItem>
    //             <DetailsItem
    //               itemName={"Ciudad"}
    //               itemProp={petsAllData.length > 0 ? petsAllData[0].city : ""}
    //             ></DetailsItem>
    //           </div>
    //           <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
    //             <DetailsContactButton
    //               buttomName={"Llámanos"}
    //               modoContacto={
    //                 petsAllData.length > 0 ? `tel:${petsAllData[0].phone}` : ""
    //               }
    //             ></DetailsContactButton>
    //             <DetailsContactButton
    //               buttomName={"Envía un correo"}
    //               modoContacto={
    //                 petsAllData.length > 0
    //                   ? `mailto:${petsAllData[0].email}`
    //                   : ""
    //               }
    //             ></DetailsContactButton>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   {/* </div> */}
    //   <NavBar></NavBar>
    // </div>
    <div class="h-screen flex items-center justify-center">
      <LogoIconBar></LogoIconBar>

      <div class="w-11/12 bg-white çççborder border-gray-100 rounded-lg text-center hover:shadow-lg align-center">
        <div href="">
          <img src="https://picsum.photos/500/300" class="rounded-t-lg" />
        </div>
        <div href=""></div>

        <div class="flex justify-center">
          <img
            src="https://picsum.photos/50/50"
            class="rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center"
          />
        </div>

        <p class="font-bold pt-3 pb-2"> Angry Pitbull Club </p>

        <p class="font-semibold p-2 text-sm text-gray-500">
          {" "}
          by{" "}
          <a href="#" class="text-blue-500 hover:text-blue-700">
            {" "}
            OfficialAPC{" "}
          </a>{" "}
        </p>

        <p class="px-10 py-2 mb-5 text-gray-500">
          {" "}
          A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is a
          collection of 10,000 unique, digital Pitbull NFT collectibles that
          represent community...{" "}
        </p>
        <div class="pb-6">
          <div class="mt-5">
            <a
              href="#"
              class="border rounded-full bg-grey-200 py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Enviar un correo
            </a>
          </div>
          <div class="mt-5">
            <a
              href="#"
              class="bg-blue-100 border rounded-full bg-grey-200 py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Llamar
            </a>
          </div>
        </div>
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
      </div>

      <NavBar></NavBar>
    </div>
  );
};
export default DetailsPets;
