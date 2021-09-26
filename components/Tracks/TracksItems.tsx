import Image from "next/image";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
const ImagesItems = ({ result, num }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-0 text-sm ">
        <h1 className="text-md tracking-wide w-64  truncate pb-1 pt-3">
          Top {num} : {result.artists[0].name}: {result.name}
        </h1>
        <div className="flex justify-center items-center border border-white border-opacity-25 ">
          <Image
            loading="lazy"
            src={result.album.images[0].url}
            width={300}
            height={300}
          />
        </div>
        <Link href={result.external_urls.spotify}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-lg hover:text-blue-800 tracking-widest flex justify-center items-center"
          >
            Listen
            <HiExternalLink size={20} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ImagesItems;
