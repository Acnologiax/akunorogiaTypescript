import { GetStaticProps } from "next";

export default function Cart(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: { data },
  };
};
