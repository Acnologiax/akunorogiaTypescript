import ImagesItems from "./ImagesItems";

const Images = ({ results }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center -m-3 p-2 pb-10 space-y-6">
        {results.map((result) => (
          <ImagesItems key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Images;
