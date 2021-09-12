import Link from "next/link";

const CardItems = ({ result }) => {
  return (
    <div>
      <div className="flex flex-col px-4 justify-center items-center border rounded-2xl shadow-xl h-96 w-96 sm:h-80 sm:w-80 ">
        <h1 className="text-sm font-bold text-center py-2">{result.title}</h1>
        <p className="truncate w-32 text-sm text-center pb-4">{result.body}</p>
        <h1 className="">{result.userId}</h1>
        <Link href={`/details/${result.id}`}>
          <a className="text-blue-800">More Details</a>
        </Link>
      </div>
    </div>
  );
};

export default CardItems;
