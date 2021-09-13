const FooterItems = () => {
  return (
    <div className="flex justify-between p-8 sm:px-40 ">
      <div className="flex flex-col justify-between ">
        <h1 className="text-xl sm:text-4xl lg:text-3xl uppercase font-medium tracking-widest">
          LOGO
        </h1>
        <h1 className="text-sm sm:text-2xl lg:text-lg text-gray-600 ">
          all ............................
        </h1>
      </div>
      <div className="flex flex-col justify-center items-start sm:text-xl lg:text-md space-y-2  ">
        <h1 className="font-bold text-lg sm:text-3xl lg:text-xl tracking-widest">
          NavBar
        </h1>
        <a>Home</a>
        <a>Posts</a>
        <a>Lastest</a>
        <a>test</a>
      </div>
    </div>
  );
};

export default FooterItems;
