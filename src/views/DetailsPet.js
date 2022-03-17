import { DetailsContext } from "../context/DetailsContext";
import { useContext, useEffect } from "react";
import DetailsPhoto from "../components/Details/DetailsPhoto";
import DetailsName from "../components/Details/DetailsName";
import DetailsOrgName from "../components/Details/DetailsOrgName";
import DetailsFeatures from "../components/Details/DetailsFeatures";
import DetailsItemsGroup from "../components/Details/DetailsItemsGroup";

import DetailsProfilePhoto from "../components/Details/DetailsProfilePhoto";
import DetailsDescription from "../components/Details/DetailsDescription";
import DetailsContactButtons from "../components/Details/DetailsContactButtons";
import NavBar from "../components/Comun/NavBar";
import LogoIconBar from "../components/Comun/LogoIconBar";
import { useParams } from "react-router-dom";

const DetailsPets = () => {
  const { uidPet } = useParams();
  const { detailPet, indexImagePet, setIndexImagePet, findByUid } =
    useContext(DetailsContext);

    console.log(detailPet)
  useEffect(() => {
    setIndexImagePet(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    findByUid(uidPet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailPet]);

  return (
    <div>
      <LogoIconBar></LogoIconBar>
      <div className="h-full flex items-center justify-center mb-40 mt-20">
        <div className="flex flex-col items-center w-11/12 bg-white çççborder border-gray-100 rounded-lg text-center hover:shadow-lg align-center">
          <DetailsPhoto
            photo={
              detailPet
                ? detailPet.imagesUrl[
                    Object.keys(detailPet.imagesUrl)[indexImagePet]
                  ]
                : ""
            }
          ></DetailsPhoto>
          <DetailsProfilePhoto
            photo={detailPet ? detailPet.imagesUrl[0] : ""}
          ></DetailsProfilePhoto>
          <DetailsName petName={detailPet ? detailPet.name : ""}></DetailsName>
          <DetailsOrgName
            petOrgName={detailPet ? detailPet.orgName : ""}
          ></DetailsOrgName>
          <DetailsDescription
            description={detailPet ? detailPet.details : ""}
          ></DetailsDescription>
          <DetailsFeatures></DetailsFeatures>
          <DetailsItemsGroup></DetailsItemsGroup>
          <DetailsContactButtons></DetailsContactButtons>

        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};
export default DetailsPets;
