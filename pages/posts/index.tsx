import Posts from "../../components/Posts/Posts";
import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";

import { GetStaticProps } from "next";

const PostsPage = (props) => {
  return (
    <Page meta={{ title: "Add Post", description: "Add Posts Page" }}>
      <Posts />
      <h1 className="flex justify-center items-center font-medium text-xl ">it's not working </h1>
      <Card results={props.data} />
              

    </Page>
  );
};

export default PostsPage;
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const data = await res.json();

  return {
    props: { data },
  };
};
