import Page from "../layouts/layout";
import { GetStaticProps } from "next";

import Currently from "../components/Footer/Currently";
export default function Curr({ data }) {
  return (
    <Page meta={{ title: "Home", description: "Home Page" }}>
      <Currently results={data} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing?market=from_token",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer BQCQvj-VUjynstDDA8gsYNQJjb6qRrTZ2quQrr98Z-G-32A_IyIk04cCeVK6BXq9cTmHWB3q64kSjwqyiuGhaYc7h8OTIYuY4k3RBxwOOa-LErYBBP-w4vycyLEV8YLgWKMISIl_I-dSWnYvKGG4uyHBK9a7uem6bKTuJ7jOlJg",
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
