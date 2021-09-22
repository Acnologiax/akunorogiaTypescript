import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";
import { GetServerSideProps } from "next";
import { server } from "../../config/index";
export default function PostsPage({ data }) {
  return (
    <Page meta={{ title: "Add Post", description: "Add Posts Page" }}>
      <Card results={data} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  return {
    props: { data },
  };
};
