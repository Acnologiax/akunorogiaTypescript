const NavItems = ({ title, Icon }) => {
  return (
    <div>
      <button className="flex flex-col justify-center cursor-pointer  items-center border rounded-xl shadow-lg h-32 w-32 bg-white focus:bg-gray-300">
        <Icon className="h-6" />
        <h1 className=" font-bold">{title}</h1>
      </button>
    </div>
  );
};

export default NavItems;
