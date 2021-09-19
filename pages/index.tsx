import Page from "../layouts/layout";
import { GetStaticProps } from "next";

import Form from "../components/Form/Form";
export default function Home({ data }) {
  console.log(data);
  const userForm = {
    username: "",
    password: "",
  };

  return (
    <Page meta={{ title: "Home", description: "Home Page" }}>
      <Form formId="add-user-form" userForm={userForm} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://api.spotify.com/v1/playlists/6nm8IHVnt1GRPKJ8zvDSD",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer BQCcGRZmvkdNjh3IE8OPQ5EHQ23QG9kwvpgB7V_9M5gU-_cOcbgjTMazzk4pDt28F1bRMitQx9yYikMBqVai-Lu70xrvCV8yzqh33jp7W_X1_8XJCjHmMiE6mvC4JVIzE5uK8TdD97ZZ5fGOdVIsULJaYK7O7iIpsdkGnDnWup8",
      },
    }
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
