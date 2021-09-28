import Page from "../layouts/layout";
import Show from "../components/TVShow/Shows";

export default function ShowsPage() {
  return (
    <Page
      meta={{
        title: "TV Shows",
        description: "My Top Tracks so far",
      }}
    >
      <div>
        <Show />
      </div>
    </Page>
  );
}
