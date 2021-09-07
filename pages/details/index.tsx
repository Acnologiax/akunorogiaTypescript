import Page from "../../layouts/layout";
import { GetStaticProps } from "next";
import Details from "../../components/Details/Details";

const DetailsPage = (props) => {
  console.log(props.data);

  return (
    <Page meta={{ title: "Details", description: "Details Page" }}>
      <div>
        <Details results={props} />
      </div>
    </Page>
  );
};

export default DetailsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const x = "1";
  const res = await fetch(`https://fakestoreapi.com/products/[id]`);
  const data = await res.json();

  return {
    props: { data },
  };
};
