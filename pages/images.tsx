import { GetStaticProps } from "next";
import Page from "../layouts/layout";
import Images from "../components/Images/Images";
const images = (props) => {
  console.log(props.data.items);
  return (
    <Page
      meta={{
        title: "Images",
        description: "Images Page",
      }}
    >
      <Images results={props.data.items} />
    </Page>
  );
};

export default images;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5&offset=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer BQBoD-md-qVBeJbjzo42NL_GvXNGImgQatawGKo7ppvlwDCkpKMhcHkr4qu8rwrerIF99SkQDgDaOTSr9jb4li8qlU-fEdj5LM9_x82-Mql-I0YFWFri3Zs_xlvDeAMMJYLWYNKbyb2QU7jkk6_fWWKg-ZWfJVsHlwC9Abd6Nso",
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
