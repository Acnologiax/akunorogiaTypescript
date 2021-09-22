import Page from "../layouts/layout";
import useSWR from "swr";
import Currently from "../components/Footer/Currently";

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify/spotify", fetcher);
  return (
    <Page meta={{ title: "", description: "Home Page" }}>
      <Currently results={data} />
    </Page>
  );
}
