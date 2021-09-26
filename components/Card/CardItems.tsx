import Image from "next/image";

import { useRouter } from "next/router";
const CardItems = ({ result }) => {
  const router = useRouter();

  let product;
  if (router.pathname === "/products") {
    product = true;
  } else {
    product = false;
  }
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${router.pathname}/${result.id}`);
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
      <div className=" rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col border border-opacity-25">
        <div className="bg-cover ">
          <h1
            className={` absolute  text-xs text-black bg-yellow-300 z-10 w-20 uppercase rounded-br-lg rounded-tl-lg p-0.5 ${
              product ? "" : "hidden"
            } `}
          >
            {`${product ? result.category : "Category"} `}
          </h1>

          <Image
            src={`${
              product
                ? result.image
                : "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900"
            } `}
            width={1920}
            height={1080}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 font-bold text-3xl">{result.title}</h3>
          <div className="mb-4 text-grey-900 text-md flex-1">
            <p className="w-72 truncate ">{result.text}</p>
          </div>

          <a
            onClick={handleClick}
            className="border-t border-grey-light pt-2 text-xs cursor-pointer hover:text-blue-900 text-grey hover:text-red uppercase no-underline tracking-widest"
          >
            More ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
