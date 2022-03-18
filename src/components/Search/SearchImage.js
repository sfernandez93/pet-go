import { SearchContext } from "../../context/SearchContext";
import { useContext, useState, useEffect } from "react";
import {
  FaHeart,
  FaRegListAlt,
  FaMapMarkerAlt,
  FaForward,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchHelpMe from "./SearchHelpMe";
import TinderCard from "react-tinder-card";

const SearchImage = () => {
  const {
    incrementIndexImage,
    deleteElementAndincrementIndexImage,
    savePetAsFavorite,
    dataPets,
    photoIndex,
    setPhotoIndex,
  } = useContext(SearchContext);

  const swiped = (direction, nameToDelete) => {
    incrementIndexImage();
  };

  if (photoIndex > dataPets.length - 1) {
    setPhotoIndex(0);
  }

  const arrayReverse = [...dataPets];

  return dataPets && dataPets.length > 0 && dataPets[photoIndex] ? (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col justify-between h-4/5 w-11/12 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center pl-4">
            <FaMapMarkerAlt size={20} style={{ fill: "gainsboro" }} />
            <p className="p-4 pl-2 text-sm font-normal text-gray-300 hover:underline">
              {dataPets && dataPets.length > 0 && dataPets[photoIndex]
                ? dataPets[photoIndex].city +
                  dataPets[photoIndex].timeElapsedSincePublication
                : ""}
            </p>
          </div>
          {dataPets &&
          dataPets.length > 0 &&
          dataPets[photoIndex] &&
          dataPets[photoIndex].isDisabled ? (
            <SearchHelpMe />
          ) : (
            <></>
          )}
        </div>
        <div className="cardContainer relative h-full">
          {arrayReverse.reverse().map((key) => (
            <TinderCard
              className={`swipe h-full absolute top-0`}
              key={Object.keys(key.imagesUrl)[0]}
              onSwipe={(dir) => swiped(dir, key)}
            >
              <img
                className="w-full h-full object-cover"
                src={key.imagesUrl[Object.keys(key.imagesUrl)[0]]}
                alt=""
              />
            </TinderCard>
          ))}
        </div>
        <div className="flex justify-between px-10 py-6">
          <NavLink
            to={`/detail/${
              dataPets && dataPets.length > 0 && dataPets[photoIndex]
                ? dataPets[photoIndex].uid
                : ""
            }`}
          >
            <FaRegListAlt size={20} style={{ fill: "grey" }} />
          </NavLink>
          <button onClick={deleteElementAndincrementIndexImage}>
            <FaForward size={20} style={{ fill: "grey" }} />
          </button>
          <button onClick={savePetAsFavorite}>
            <FaHeart
              size={20}
              style={{ fill: "red" }}
              className=" hover:shadow-2xl transition duration-200 transform hover:scale-150 cursor-pointers"
            />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
  // return (
  //   <div>
  //     <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
  //     <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
  //     <h1>React Tinder Card</h1>
  //     <div className='cardContainer'>
  //       {characters.map((character) =>
  //         <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
  //           <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
  //             <h3>{character.name}</h3>
  //           </div>
  //         </TinderCard>
  //       )}
  //     </div>
  //     {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
  //   </div>
  // )
};

export default SearchImage;
