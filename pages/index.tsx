import Page from "../layouts/layout";
import useSWR from "swr";
import Currently from "../components/Footer/Currently";
import Tracks from "../components/Tracks/Tracks";
import Artists from "../components/Artists/Artists";
import Movie from "../components/Movie/Movie";
import Shows from "../components/TVShow/Shows";

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify/spotify", fetcher);
  if (!data)
    return (
      <div className="text-2xl flex justify-center items-center p-8 ">
        Just a moment Loading...
      </div>
    );
  return (
    <Page meta={{ title: "", description: "Home Page" }}>
      <Currently results={data} />

      <div className="relative pb-12">
        <h1 className=" tracking-widest px-5 text-lg pt-10">My Top Tracks:</h1>
        <Tracks />
        <div className="absolute w-10 lg:w-40 h-80 z-10 top-20 right-0 bg-gradient-to-l from-black opacity-50 " />
      </div>

      <div className="relative pb-12">
        <h1 className=" tracking-widest px-5  pr-2 text-lg pt-10">
          My Top Artists:
        </h1>

        <Artists />
        <div className="absolute w-10 lg:w-40 h-80 z-10 top-20 right-0 bg-gradient-to-l from-black opacity-50 " />
      </div>

      <div className="relative pb-12">
        <h1 className=" tracking-widest px-5 text-lg pt-10 ">My Top Movies:</h1>
        <Movie />
        <div className="absolute w-10 lg:w-40 h-3/4 z-10 top-20 right-0 bg-gradient-to-l from-black opacity-50 " />
      </div>

      <div className="relative pb-24">
        <h1 className=" tracking-widest px-5 text-lg pt-10">
          My Top TV Shows:
        </h1>
        <Shows />
        <div className="absolute w-10 lg:w-40 h-3/4 z-10 top-20 right-0 bg-gradient-to-l from-black opacity-50 " />
      </div>
    </Page>
  );
}
