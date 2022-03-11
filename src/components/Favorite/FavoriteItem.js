const FavoriteItem = ({urlImage}) => {
    return (
        <div className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={urlImage}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          ></img>
        </div>
        {/* <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p> */}
      </div>
    );
  };
  export default FavoriteItem;
  