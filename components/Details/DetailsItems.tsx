import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/cartSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
const DetailsItems = ({ result }) => {
  const [state, setState] = useState([
    result.title,
    result.price,
    result.image,
  ]);

  const router = useRouter();
  let posts;
  if (router.pathname === "/posts/[pid]") {
    posts = true;
  } else {
    posts = false;
  }
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const submitPost = () => {
    setState(state[(result.title, result.price, result.image)]);
    console.log(state);
  };
  console.log(state);
  return (
    <>
      <h1 className=" font-bold text-2xl sm:text-4xl  px-2 pt-2">
        title:{result.title} | id:{result.id}
      </h1>
      <div>
        {posts ? (
          <h1> No Image</h1>
        ) : (
          <Image src={result.image} width={300} height={400} />
        )}
      </div>
      <p className=" text-lg sm:text-2xl px-2 pb-6">{result.description}</p>
      <div>
        {posts ? <h1> </h1> : <h1 className="text-lg mb-2">{result.price}$</h1>}
      </div>
      <button
        onClick={submitPost}
        className="rounded-lg bg-gray-500 bg-opacity-25 p-3 "
      >
        Add to cart
      </button>
    </>
  );
};

export default DetailsItems;
