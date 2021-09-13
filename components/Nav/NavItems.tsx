const NavItems = ({ title, Icon, span }) => {
  return (
    <div>
      <button className="flex flex-col justify-center cursor-pointer  items-center border rounded-xl shadow-lg h-16 w-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white focus:bg-gray-300">
        <Icon className="h-6" />
        <h1 className=" font-bold">{title}</h1>
        <span className="text-red-900 text-sm sm:text-lg lg:text-xl ">
          {span}
        </span>
      </button>
    </div>
  );
};

export default NavItems;
