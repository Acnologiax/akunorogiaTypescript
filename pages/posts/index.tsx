import Nav from "../../components/Nav/Nav";
import Posts from "../../components/Posts/Posts";
import Page from "../../layouts/layout";
const PostsPage = () => {
  return (
    <Page meta={{ title: "Add Post", description: "Add Posts Page" }}>
      <Posts />
    </Page>
  );
};

export default PostsPage;
