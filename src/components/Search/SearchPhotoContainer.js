import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";
import TinderCard from "react-tinder-card";

const SearchPhotoContainer = () => {
  const { dataPets, incrementIndexImage } = useContext(SearchContext);
  const arrayReverse = [...dataPets];

  return (
    <div className="cardContainer relative h-full">
      {arrayReverse.reverse().map((key) => (
        <TinderCard
          className={`swipe h-full w-full absolute top-0 ${
            key.isPhotoHidden ? "hidden" : ""
          }`}
          key={Object.keys(key.imagesUrl)[0]}
          onSwipe={incrementIndexImage}
        >
          <img
            className="w-full h-full object-cover"
            src={key.imagesUrl[Object.keys(key.imagesUrl)[0]]}
            // src="https://i.pinimg.com/564x/68/3c/ea/683cea0440eb469f7f6a85292c763e48.jpg"
            alt=""
          />
        </TinderCard>
      ))}
    </div>
  );
};

export default SearchPhotoContainer;
