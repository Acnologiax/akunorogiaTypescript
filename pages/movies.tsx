import Page from "../layouts/layout";
import Movie from "../components/Movie/Movie";

export default function MoviesPage() {
  return (
    <Page
      meta={{
        title: "Movies",
        description: "My Top Tracks so far",
      }}
    >
      <div>
        <h1 className="pt-24 ">Fixing a Problem</h1>
      </div>
    </Page>
  );
}
