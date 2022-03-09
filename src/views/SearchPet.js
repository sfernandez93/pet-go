import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import React from "react";
import { FaHeart, FaSadTear } from "react-icons/fa";

const Searchpet = () => {
  const {
    getDataFromPetsDatabase,
    incrementIndexImage,
    indexImages,
    petsAllData,
  } = useContext(SearchContext);

  useEffect(() => {
    getDataFromPetsDatabase();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-10 sm:py-24 lg:py-32 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={
                      petsAllData.length > 0
                        ? petsAllData[indexImages].profileImage
                        : ""
                    }
                    // "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    className="w-full h-full object-center object-cover"
                  ></img>
                </div>

                <p className="text-2xl font-semibold text-gray-900 p-4">
                  {petsAllData.length > 0
                    ? `${petsAllData[indexImages].name}, ${petsAllData[indexImages].age}`
                    : ""}
                </p>
                <div className="pl-4 text-sm text-gray-500">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {petsAllData.length > 0
                      ? petsAllData[indexImages].city
                      : ""}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <button
          onClick={incrementIndexImage}
          type="button"
          className="inline-flex items-center justify-center w-20 h-20 mr-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80"
        >
          <FaSadTear size={50} style={{ fill: "black" }} />
        </button>

        <button
          type="button"
          onClick={incrementIndexImage}
          className="inline-flex items-center justify-center w-20 h-20 mr-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80"
        >
          <FaHeart size={50} style={{ fill: "white" }} />
        </button>
      </div>
    </div>
  );
};
export default Searchpet;
