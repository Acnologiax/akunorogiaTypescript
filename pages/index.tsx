import Page from "../layouts/layout";
import Card from "../components/Card/Card";
import { GetStaticProps } from "next";

export default function Home(props) {
  return (
    <Page meta={{ title: "Home", description: "Home Page" }}>
      <div>
        <Card results={props.data} />
      </div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const data = await res.json();

  return {
    props: { data },
  };
};
