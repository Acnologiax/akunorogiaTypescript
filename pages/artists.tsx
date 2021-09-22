import Page from "../layouts/layout";
import ArtistsItems from "../components/Artists/ArtistsItems";
import useSWR from "swr";
const ArtistsPage = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("api/top-artists", fetcher);
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
        title: "Artists",
        description: "My Top Artists so far",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -m-3 p-2 py-10">
        {data.main.map((item) => (
          <ArtistsItems result={item} num={(x += 1)} key={item.id} />
        ))}
      </div>
    </Page>
  );
};

export default ArtistsPage;
