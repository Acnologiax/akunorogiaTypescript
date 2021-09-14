import Page from "../../layouts/layout";
import Card from "../../components/Card/Card";

import { GetStaticProps } from "next";

const Products = (props) => {
  return (
    <Page meta={{ title: "Add Post", description: "Add Posts Page" }}>
      <Card results={props.data} />
    </Page>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data = await res.json();

  return {
    props: { data },
  };
};
