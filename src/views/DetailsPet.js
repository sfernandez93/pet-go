import { SearchContext } from "../context/SearchContext";
import { DetailsContext } from "../context/DetailsContext";
import { useContext, useEffect, useState } from "react";
import DetailsPhoto from "../components/Details/DetailsPhoto";
import DetailsDescription from "../components/Details/DetailsDescription";
import DetailsName from "../components/Details/DetailsName";
import DetailsItem from "../components/Details/DetailsItem";
import DetailsContactButton from "../components/Details/DetailsContactButton";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";
import { useParams } from "react-router-dom";

const DetailsPets = () => {
  const { uidPet } = useParams();
  const { petsAllData, getDataFromPetsDatabase } = useContext(SearchContext);

  const { detailPet, indexImagePet, setIndexImagePet, findByUid } =
    useContext(DetailsContext);

  useEffect(() => {
    setIndexImagePet(0);
    if (petsAllData.length < 1) getDataFromPetsDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    findByUid(uidPet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petsAllData]);

  return (
    <div>
      <LogoIconBar></LogoIconBar>
      <div className="h-screen flex items-center justify-center">
        <div className="w-11/12 bg-white çççborder border-gray-100 rounded-lg text-center hover:shadow-lg align-center">
          <DetailsPhoto
            photo={
              detailPet
                ? detailPet.imagesUrl[
                    Object.keys(detailPet.imagesUrl)[indexImagePet]
                  ]
                : ""
            }
          ></DetailsPhoto>

          <div href=""></div>

          <div className="relative flex justify-center">
            <img
              src="https://picsum.photos/50/50"
              className="rounded-full object-center border-4 border-white -mt-6 shadow-lg align-center"
            />
          </div>

          <p className="font-bold pt-3 pb-2"> Angry Pitbull Club </p>

          <p className="font-semibold p-2 text-sm text-gray-500">
            {" "}
            by{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              {" "}
              OfficialAPC{" "}
            </a>{" "}
          </p>

          <DetailsDescription
            description={detailPet ? detailPet.details : ""}
          ></DetailsDescription>

          <div className="pb-6">
            <DetailsContactButton
              bgColor={"bg-blue-100"}
              buttomName={"Enviar un correo"}
              modoContacto={detailPet ? `mailto:${detailPet.email}` : ""}
            ></DetailsContactButton>
            <DetailsContactButton
              bgColor={"white"}
              buttomName={"Llamar"}
              modoContacto={detailPet ? `tel:${detailPet.phone}` : ""}
            ></DetailsContactButton>
          </div>
          <div className="flex flex-col divide-y mb-20">
            <DetailsItem
              itemName={"Raza"}
              itemProp={detailPet ? detailPet.race : ""}
            ></DetailsItem>
            <DetailsItem
              itemName={"Edad"}
              itemProp={detailPet ? detailPet.age : ""}
            ></DetailsItem>
            <DetailsItem
              itemName={"Ciudad"}
              itemProp={detailPet ? detailPet.city : ""}
            ></DetailsItem>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};
export default DetailsPets;
