import Page from "../layouts/layout";

import Form from "../components/Form/Form";
export default function Home() {
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
