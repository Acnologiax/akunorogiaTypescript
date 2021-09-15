import Page from "../layouts/layout";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <Page meta={{ title: "Cart", description: "Cart Page" }}>
      <div className="divide-y-2 divide-black">
        {cart.length === 0 ? (
          <h1 className=" flex justify-center text-xl pt-8">
            Your Cart is Empty!
          </h1>
        ) : (
          <>
            {cart.map((item) => (
              <div className="flex flex-col justify-start p-4 text-lg ">
                <div className="flex space-x-4  items-center ">
                  <div>
                    <Image src={item.image} height="90" width="65" />
                  </div>
                  <p>{item.title}</p>
                </div>
                <p>Price : $ {item.price}</p>
                <p>Quantity : {item.quantity}</p>
                <div>
                  <div className="space-x-4 text-xl p-4 text-blue-700">
                    <button
                      className="border border-black w-8 cursor-pointer"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="border border-black w-8 cursor-pointer"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <button
                      className="border border-black w-8 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      x
                    </button>
                  </div>
                </div>
                <p>Total : $ {item.quantity * item.price}</p>
              </div>
            ))}
            <h2 className="flex justify-center px-2 text-xl pt-2 ">
              Grand Total: $ {Math.floor(getTotalPrice())}
            </h2>
          </>
        )}
      </div>
    </Page>
  );
}
