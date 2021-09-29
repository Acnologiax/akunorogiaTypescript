import Page from "../layouts/layout";
import Shows from "../components/TVShow/Shows";

export default function ShowsPage() {
  return (
    <Page
      meta={{
        title: "TV Shows",
        description: "My Top TV Shows so far",
      }}
    >
      <div>
        <Shows />
      </div>
    </Page>
  );
}
