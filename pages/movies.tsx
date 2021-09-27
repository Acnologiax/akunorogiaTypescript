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
        <Movie />
      </div>
    </Page>
  );
}
