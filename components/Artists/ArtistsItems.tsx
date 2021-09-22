import Image from "next/image";
import Link from "next/link";

const ArtistsItems = ({ result, num }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-0 text-sm ">
        <h1 className="text-md tracking-widest  pb-1 pt-16">
          Top {num}:{" "}
          <Link href={result.external_urls.spotify}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer  hover:text-blue-800"
            >
              {result.name}
            </a>
          </Link>
        </h1>
        <div className="flex justify-center items-center border border-white border-opacity-30">
          <Image
            loading="lazy"
            src={result.images[0].url}
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistsItems;
