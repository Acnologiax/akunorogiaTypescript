import DetailsItems from "./DetailsItems";

const Details = ({ results }) => {
  return (
    <div className="w-screen h-auto py-2">
      <DetailsItems key={results} result={results} />
    </div>
  );
};

export default Details;
