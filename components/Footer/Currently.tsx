import { SiSpotify } from "react-icons/si";
import { GiCompactDisc } from "react-icons/gi";
import Image from "next/image";
const Currently = ({ results }) => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center ">
      <SiSpotify
        size={20}
        color={"#1ED760"} 
        className={results?.isPlaying ? "animate-spinSlow" : "hidden"}
      />
      <h1>Listening to:</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          results?.isPlaying
            ? results.songUrl
            : "https://open.spotify.com/user/ykb8q2gm5rn5eqtgm2ldgttas?si=e1648ee1808b4e6c"
        }
        className="relative flex items-center p-5 space-x-4 transition-shadow border border-opacity-50 rounded-md hover:shadow-md w-72 lg:w-96"
      >
        <div className="w-16 lg:w-24">
          {results?.isPlaying ? (
            <Image
              loading="lazy"
              src={results?.albumImageUrl}
              alt={results?.album}
              width={64}
              height={64}
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
