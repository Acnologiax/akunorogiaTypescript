import Page from "../layouts/layout";
import Tracks from "../components/Tracks/Tracks";

export default function TracksPage() {
  return (
    <Page
      meta={{
        title: "Tracks",
        description: "My Top Tracks so far",
      }}
    >
      <div>
        <Tracks />
      </div>
    </Page>
  );
}
