import HomeLoading from "../components/Loading/HomeLoading";
import Page from "../layouts/layout";

export default function Home() {
  return (
    <Page meta={{ title: "Lists", description: "Home Page" }}>
      <HomeLoading />
    </Page>
  );
}
