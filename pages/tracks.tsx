import { GetStaticProps } from "next";
import Page from "../layouts/layout";
import TracksItems from "../components/Tracks/TracksItems";
import useSWR from "swr";

const TracksPage = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("api/top-tracks", fetcher);
  let x = 0;
  if (!data)
    return (
      <div className="text-2xl flex justify-center items-center p-8 ">
        Loading...
      </div>
    );
  return (
    <Page
      meta={{
        title: "Tracks",
        description: "My Top Tracks so far",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -m-3 p-2 py-10">
        {data.main.map((item) => (
          <TracksItems result={item} num={(x += 1)} key={item.id} />
        ))}
      </div>
    </Page>
  );
};

export default TracksPage;

/* export const getStaticProps: GetStaticProps = async (context) => {
  const token = process.env.TOKEN;

  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20&offset=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
 */
