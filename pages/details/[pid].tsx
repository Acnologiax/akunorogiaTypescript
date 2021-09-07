import { useRouter } from "next/router";
import Details from "../../components/Details/Details";
import DetailsPage from "./index";
const Detail = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <DetailsPage key={pid} />;
};

export default Detail;
