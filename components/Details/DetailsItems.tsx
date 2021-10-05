const DetailsItems = ({ result }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-2/3">
        <h1 className=" text-xl sm:text-4xl px-2 pt-2 tracking-wide md:tracking-widest ">
          {result.artists} - {result.title}
        </h1>
        <p className="text-sm pt-10 tracking-wide text-left leading-loose lg:text-2xl ">{` \" ${result.quote} \"`}</p>
      </div>
    </>
  );
};

export default DetailsItems;
