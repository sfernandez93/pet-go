import { DetailsContext } from "../context/DetailsContext";
import { useContext, useEffect } from "react";

const DetailsPets = () => {
  useEffect(() => {
    // getDataDetailssFromDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div id="viewerButton" className="hidden w-full flex justify-center">
          <button className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold">
            Open Quick View
          </button>
        </div>
        <div
          id="viewerBox"
          className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
        >
          <div className="flex justify-end">
            <button
              aria-label="Close"
              className="focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                className="dark:text-white"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
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
                      src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
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
            <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Bar Stool
              </h1>
              <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
                You don't just want to be comfortable sitting in a bar stool—you
                want to be comfortable shimmying it up to the bar, closer to
                your lover, or back slightly to include a third person in the
                conversation.
              </p>
              <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
              <div class="flex flex-col divide-y">
                <div class="flex justify-between ">
                  <div>Edad</div>
                  <div>2</div>
                </div>
                <div class="flex justify-between ">
                  <div>a</div>
                  <div>b</div>
                </div>
              </div>
              <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                <button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
    //   <img
    //     className="w-full h-56 object-cover object-center"
    //     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    //     alt="avatar"
    //   ></img>
    //   <div className="flex items-center px-6 py-3 bg-gray-900">
    //     <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
    //       <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
    //     </svg>
    //     <h1 className="mx-3 text-white font-semibold text-lg">Focusing</h1>
    //   </div>
    //   <div className="py-4 px-6">
    //     <h1 className="text-2xl font-semibold text-gray-800">
    //       Patterson johnson
    //     </h1>
    //     <p className="py-2 text-lg text-gray-700">
    //       Full Stack maker & UI / UX Designer , love hip hop music Author of
    //       Building UI.
    //     </p>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
    //         <g>
    //           <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
    //         </g>
    //       </svg>
    //       <h1 className="px-2 text-sm">MerakiTeam</h1>
    //     </div>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
    //       </svg>
    //       <h1 className="px-2 text-sm">California</h1>
    //     </div>
    //     <div className="flex items-center mt-4 text-gray-700">
    //       <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
    //         <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
    //       </svg>
    //       <h1 className="px-2 text-sm">patterson@example.com</h1>
    //     </div>
    //   </div>
    // </div>
  );
};
export default DetailsPets;
