import CardItems from "./CardItems";

const Card = ({ results }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center	px-10 py-10">
        {results.map((result) => (
          <CardItems key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Card;
