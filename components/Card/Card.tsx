import CardItems from "./CardItems";

const Card = ({ results }) => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 justify-center items-center sm:justify-items-center pl-6  	">
        {results.map((result) => (
          <CardItems key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Card;
