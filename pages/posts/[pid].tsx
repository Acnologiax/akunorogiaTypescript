import { useRouter } from "next/router";
import Details from "../../components/Details/Details";
import Nav from "../../components/Nav/Nav";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Detail = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { data, error } = useSwr(
    pid ? `https://jsonplaceholder.typicode.com/posts/${pid}` : null,
    fetcher
  );
  console.log(router.query.id);

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <p>
      <Nav />
      <Details results={data} />
    </p>
  );
};

export default Detail;
