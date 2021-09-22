import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useRouter } from "next/router";
import Image from "next/image";
const DetailsItems = ({ result }) => {
  const router = useRouter();
  let posts;
  if (router.pathname === "/posts/[pid]") {
    posts = true;
  } else {
    posts = false;
  }
  const dispatch = useDispatch();

  return (
    <>
      <h1 className=" font-bold text-2xl sm:text-4xl px-2 pt-2">
        title:{result.title} | id:{result.id}
      </h1>
      <div>
        {posts ? (
          <h1> No Image</h1>
        ) : (
          <Image loading="lazy" src={result.image} width={300} height={400} />
        )}
      </div>
      <p className=" text-lg sm:text-2xl px-2 pb-6">{result.description}</p>
      <div>
        {posts ? <h1> </h1> : <h1 className="text-lg mb-2">{result.price}$</h1>}
      </div>
      {posts ? (
        <h1></h1>
      ) : (
        <button
          onClick={() => dispatch(addToCart(result))}
          className="rounded-lg bg-gray-500 bg-opacity-25 p-3 "
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default DetailsItems;
