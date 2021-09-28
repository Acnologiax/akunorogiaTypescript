import { useRouter } from "next/router";
const DetailsItems = ({ result }) => {
  const router = useRouter();
  let posts;
  if (router.pathname === "/posts/[pid]") {
    posts = true;
  } else {
    posts = false;
  }

  return (
    <>
      <h1 className=" font-bold text-2xl sm:text-4xl px-2 pt-2">
        title:{result.title} | id:{result.id}
      </h1>
      <div>
        <h1> No Image</h1>
      </div>
      <p className=" text-lg sm:text-2xl px-2 pb-6">{result.description}</p>
    </>
  );
};

export default DetailsItems;
