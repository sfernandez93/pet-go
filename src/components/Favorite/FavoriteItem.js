const FavoriteItem = ({urlImage}) => {
    return (
      <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div class="w-full h-40">
          <img class="object-center object-cover w-full h-full" src={urlImage} alt="photo"></img>
      </div>
  </div>
    );
  };
  export default FavoriteItem;
  