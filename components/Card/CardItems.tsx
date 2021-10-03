import { useRouter } from "next/router";
const CardItems = ({ result }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`${router.pathname}/${result.id}`);
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
      <div className=" rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col border border-opacity-25">
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 font-bold text-3xl">{result.title}</h3>
          <div className="mb-4 text-grey-900 text-md flex-1">
            <p className="w-72 truncate ">{result.artists}</p>
          </div>

          <a
            onClick={handleClick}
            className="border-t border-grey-light pt-2 text-xs cursor-pointer hover:text-blue-900 text-grey hover:text-red uppercase no-underline tracking-widest"
          >
            View ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
