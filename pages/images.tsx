import { GetStaticProps } from "next";
import Page from "../layouts/layout";
import Images from "../components/Images/Images";
const images = (props) => {
  return (
    <Page
      meta={{
        title: "Images",
        description: "Images Page",
      }}
    >
      <Images results={props.data} />
    </Page>
  );
};

export default images;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://picsum.photos/v2/list?limit=20`);
  const data = await res.json();

  return {
    props: { data },
  };
};
