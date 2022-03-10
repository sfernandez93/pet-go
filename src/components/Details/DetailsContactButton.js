const DetailsContactButton = ({buttomName, modoContacto}) => {
  return (
    <a href={modoContacto} className="w-full text-center md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
      {buttomName}
    </a>
  );
};
export default DetailsContactButton;
