import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const CardItems = ({ result }) => {
    const router = useRouter();
    const handleClick = (e) => {
    e.preventDefault()
    router.push(`${window.location.pathname}/${result.id}`)
  }
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
      <div className="bg-gradient-to-br from-gray-300 rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div className="bg-cover ">
          <h1 className=" absolute  text-sm bg-yellow-300 z-10 w-20 uppercase rounded-br-lg rounded-tl-lg p-0.5 ">
            Catagory
          </h1>

          <Image
            src={
              "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900"
            }
            width={1920}
            height={1080}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 font-bold text-3xl">{result.title}</h3>
          <div className="mb-4 text-grey-900 text-md flex-1">
            <p className="w-72 truncate ">{result.text}</p>
          </div>
          
            <a  onClick={handleClick}
            className="border-t border-grey-light pt-2 text-xs cursor-pointer hover:text-blue-900 text-grey hover:text-red uppercase no-underline tracking-wide">
              More ...
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default CardItems;
