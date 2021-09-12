import { GetStaticProps } from "next";
import Page from "../layouts/layout";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, empty } from "../redux/cartSlice";
export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Page meta={{ title: "Cart", description: "Cart Page" }}>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="space-x-8">
          <button
            onClick={() => dispatch(empty())}
            className="bg-gray-500 whitespace-normal w-32 text-white active:bg-gray-700"
          >
            Remove all Item from Cart
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-gray-500 whitespace-normal w-32 text-white active:bg-gray-700"
          >
            Remove one Item from Cart
          </button>
        </div>
        <h1 className="text-2xl p-10">{cart}</h1>
      </div>
    </Page>
  );
}
