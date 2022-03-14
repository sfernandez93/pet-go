const FavoriteItem = ({urlImage}) => {
    return (
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full h-40">
          <img className="object-center object-cover w-full h-full" src={urlImage} alt="photo"></img>
      </div>
  </div>
    );
  };
  export default FavoriteItem;
  