const DetailsItems = ({ result }) => {
  return (
    <>
      <h1 className=" text-xl sm:text-4xl px-2 pt-2 tracking-wide md:tracking-widest ">
        {result.artists} {result.title}
      </h1>
      <p className="text-sm pt-10 tracking-wide text-left leading-relaxed">{` \" ${result.quote}\ "`}</p>
    </>
  );
};

export default DetailsItems;
