import DetailsItems from "./DetailsItems";

const Details = ({ results }) => {
  return (
    <div className="w-auto h-auto py-2 flex flex-col justify-center items-center shadow-xl  m-4 p-4 text-center pt-24">
      <DetailsItems key={results} result={results} />
    </div>
  );
};

export default Details;
