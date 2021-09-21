import Image from "next/image";
import { SiSpotify } from "react-icons/si";

const Currently = ({ results }) => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center ">
      <h1>
        <span className="text-mine"> Aku</span>
        <span className="text-mine2">noro</span>
        <span className="text-mine">gia</span> is Listening to:
      </h1>
      <a
        target="_blank"
        rel="noopener noreferer"
        href={
          results?.isPlaying
            ? results.songUrl
            : "https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig"
        }
        className="relative flex items-center p-5 space-x-4 transition-shadow border border-opacity-50 rounded-md hover:shadow-md w-72 lg:w-96"
      >
        <div className="w-16 lg:w-24">
          {results?.isPlaying ? (
            <img
              className="w-16 lg:w-24 shadow-sm"
              src={results?.albumImageUrl}
              alt={results?.album}
            />
          ) : (
            <SiSpotify size={64} color={"#1ED760"} />
          )}
        </div>

        <div className="flex-1">
          <p className="  ">
            {results?.isPlaying ? results.title : "Not Listening"}
          </p>
          <p className="text-xs ">
            {results?.isPlaying ? results.artist : "Spotify"}
          </p>
        </div>
        <div className="absolute bottom-1.5 right-1.5">
          <SiSpotify size={20} color={"#1ED760"} />
        </div>
      </a>
    </div>
  );
};

export default Currently;
