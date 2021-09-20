import ArtistsItems from "./ArtistsItems";

const Artists = ({ results }) => {
  let x = 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -m-3 p-2 py-10">
      {results.map((result) => (
        <ArtistsItems key={result.id} result={result} num={(x += 1)} />
      ))}
    </div>
  );
};

export default Artists;
