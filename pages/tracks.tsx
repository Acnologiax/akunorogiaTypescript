import { GetStaticProps } from "next";
import Page from "../layouts/layout";
import Tracks from "../components/Tracks/Tracks";
const TracksPage = (props) => {
  return (
    <Page
      meta={{
        title: "Tracks",
        description: "My Top Tracks so far",
      }}
    >
      <Tracks results={props.data.items} />
    </Page>
  );
};

export default TracksPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20&offset=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer BQAMSFNTayIikTlVfa4hqy0IWeqHS9HKAr_IxrZzaOcAn3JLHmu-4wuoHqt1l1BH3JpcFvE7zUkeS1xYI7PnhY4CCbxOs4_Bh7Dm_6z8qDldb2rP-Czd2k2PQgytg6Wv-UI7IHdeNMqRMAk0czQJrXzyon5JXEox8q0ryJ93aBLbK4P1`,
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
