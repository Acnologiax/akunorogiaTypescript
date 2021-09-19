import Image from "next/image";

const ImagesItems = ({ result }) => {
  return (
    <div>
      <div className="flex flex-col justify-center pl-4 mx-0 ">
        <h1 className="text-md tracking-widest">
          {result.artists[0].name}: {result.name}
        </h1>
        <iframe
          src={`https://open.spotify.com/embed/track/${result.uri.substr(14)}`}
          width="300"
          height="80"
          allow="encrypted-media"
        ></iframe>
        <br />
      </div>
    </div>
  );
};

export default ImagesItems;
