const DetailsPhoto = ({photo}) => {
    return (
        <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
        <div className="flex items-center">
          {/* <button aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
        <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 16L24 32L40 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button> */}
        </div>
        <div className="slider">
          <div className="slide-ana lg:relative">
            <div className="flex">
              <img
                src={photo}
                alt="A black chair with wooden legs"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            aria-label="slide forward"
            className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
          >
            {/* <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16L40 32L24 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg> */}
          </button>
        </div>
      </div>
    );
  };
  export default DetailsPhoto;
  