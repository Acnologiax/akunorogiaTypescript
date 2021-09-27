import Image from "next/image";
import Link from "next/link";

const MovieItems = ({ result }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-0 text-sm ">
        <h1 className="text-md tracking-widest w-64  truncate  pb-1 pt-5">
          {result.title}
        </h1>
        <div className="flex justify-center items-center border border-white border-opacity-30">
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            width={340}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
