import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";
import { GetStaticProps } from "next";
import { server } from "../../config/index";
const PostsPage = ({ data }) => {
  return (
    <Page meta={{ title: "Add Post", description: "Add Posts Page" }}>
      <Card results={data} />
    </Page>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();

  return {
    props: { data },
  };
};
