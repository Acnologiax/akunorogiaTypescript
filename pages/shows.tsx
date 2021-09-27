import Page from "../layouts/layout";
import Show from "../components/TVShow/Shows";

export default function TracksPage() {
  return (
    <Page
      meta={{
        title: "Show",
        description: "My Top Tracks so far",
      }}
    >
      <div>
        <Show />
      </div>
    </Page>
  );
}
