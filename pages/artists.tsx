import Page from "../layouts/layout";
import Artists from "../components/Artists/Artists";
export default function ArtistsPage() {
  return (
    <Page
      meta={{
        title: "Artists",
        description: "My Top Artists so far",
      }}
    >
      <div>
        <Artists />
      </div>
    </Page>
  );
}
