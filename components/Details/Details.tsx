import DetailsItems from "./DetailsItems";

const Details = ({ results }) => {
  return (
    <div>
      <DetailsItems key={results} result={results} />
    </div>
  );
};

export default Details;
