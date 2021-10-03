import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";
import { GetServerSideProps } from "next";
import { server } from "../../config/index";
export default function PostsPage({ data }) {
  return (
    <Page meta={{ title: "Quotes", description: " Quotes Page" }}>
      <Card results={data} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/quotes`);
  const data = await res.json();

  return {
    props: { data },
  };
};
