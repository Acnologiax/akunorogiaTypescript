import Page from "../layouts/layout";
export default function aboutPage() {
  return (
    <Page
      meta={{
        title: "About",
        description: "About Page",
      }}
    >
      <div className="pt-24">About</div>
    </Page>
  );
}
