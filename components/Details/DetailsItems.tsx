import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/cartSlice";
import Image from "next/image"
const DetailsItems = ({ result }) => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className=" font-bold text-2xl sm:text-4xl  px-2 pt-2">
        title:{result.title} | id:{result.id}
      </h1>
      <Image src={result.image} width={300} height={400} />
      <p className=" text-lg sm:text-2xl px-2 pb-6">{result.text}</p>
      <button
        onClick={() => dispatch(increment())}
        className="rounded-lg bg-gray-500 bg-opacity-25 p-3 "
      >
        Add to cart
      </button>
    </>
  );
};

export default DetailsItems;
