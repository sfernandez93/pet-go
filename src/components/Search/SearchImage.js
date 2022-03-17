import { SearchContext } from "../../context/SearchContext";
import { useContext, useState } from "react";
import {
  FaHeart,
  FaRegListAlt,
  FaMapMarkerAlt,
  FaForward,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchHelpMe from "./SearchHelpMe";
import TinderCard from "react-tinder-card";
const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

const SearchImage = () => {
  const { incrementIndexImage, savePetAsFavorite, dataPets, photoIndex } =
    useContext(SearchContext);

    const characters = db
    // const [lastDirection, setLastDirection] = useState()
  
    const swiped = () => {
      incrementIndexImage()
      // setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }
  
  return dataPets && dataPets.length > 0 ? (
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
          {dataPets.map((key) => (
            <TinderCard
              className="swipe h-full absolute top-0"
              key={Object.keys(key.imagesUrl)[0]}
              onSwipe={incrementIndexImage}
              onCardLeftScreen={() => outOfFrame(Object.keys(key.imagesUrl)[0])}
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
          <button onClick={incrementIndexImage}>
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
