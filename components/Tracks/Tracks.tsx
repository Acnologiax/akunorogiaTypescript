import TracksItems from "./TracksItems";
const Tracks = ({ results }) => {
  let x = 0;
  console.log(results);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -m-3 p-2 py-10">
        {results.map((result) => (
          <TracksItems key={result.id} result={result} num={(x += 1)} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
