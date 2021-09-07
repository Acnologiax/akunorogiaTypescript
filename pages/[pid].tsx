import { useRouter } from "next/router";
import Details from "../components/Details/Details";

const Detail = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <Details results={pid}></Details>;
};

export default Detail;
