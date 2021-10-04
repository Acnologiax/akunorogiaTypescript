import { SiSpotify } from "react-icons/si";
import Image from "next/image";
import useSWR from "swr";
import { VscLoading } from "react-icons/vsc";
const Currently = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify/spotify", fetcher);
  if (!data)
    return (
      <div className="text-2xl flex justify-center items-center p-8 pt-24 ">
        <VscLoading className="animate-spin" />
      </div>
    );
  return (
    <div className="pt-24 flex flex-col justify-center items-center text-white">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/ykb8q2gm5rn5eqtgm2ldgttas?si=e1648ee1808b4e6c"
        }
        className="relative bg-gray-200 bg-opacity-10 flex items-center p-5 space-x-4 transition-shadow border border-opacity-10 rounded-md hover:shadow-md w-72 lg:w-96"
      >
        <div className="w-16 lg:w-24">
          {data?.isPlaying ? (
            <Image
              src={data?.albumImageUrl}
              alt={data?.album}
              width={64}
              height={64}
            />
          ) : (
            <SiSpotify size={64} color={"#1ED760"} />
          )}
        </div>

        <div className="flex-1">
          <p className="  ">{data?.isPlaying ? data.title : "Not Listening"}</p>
          <p className="text-xs ">
            {data?.isPlaying ? data.artist : "Spotify"}
          </p>
        </div>
        <div className="absolute bottom-1.5 right-1.5">
          <SiSpotify
            size={25}
            color={"#1ED760"}
            className={data?.isPlaying ? "animate-spinSlow" : ""}
          />
        </div>
      </a>
    </div>
  );
};

export default Currently;
