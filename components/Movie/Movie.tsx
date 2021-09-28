import MovieItems from "./MovieItems";
import useSWR from "swr";
import { useRouter } from "next/router";
import { VscLoading } from "react-icons/vsc";
const Movie = () => {
  const router = useRouter();

  let home = true;
  if (router.pathname === "/") {
    home = true;
  } else if (router.pathname === "/movies") {
    home = false;
  }
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("api/tmdb/tmdb", fetcher);
  if (!data)
    return (
      <div className="text-2xl flex justify-center items-center p-8 pt-24 ">
        <VscLoading className="animate-spin" />
      </div>
    );
  return (
    <div>
      <div
        className={
          home
            ? "flex  space-x-6 px-6  overflow-x-scroll scrollbar-hide "
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -m-3 p-2 py-10 pt-24 lg:gap-4 xl:gap-0"
        }
      >
        {data.main.slice(0, home ? 10 : 50).map((result) => (
          <MovieItems key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
