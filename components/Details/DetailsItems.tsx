import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/cartSlice";
const DetailsItems = ({ result }) => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center shadow-xl w-auto m-4 p-4">
        <h1 className="font-bold text-2xl px-2">{result.title}</h1>
        <p className="text-xl w-96 px-2 pt-2">{result.body}</p>
        <h1 className="text-2xl p-4">{result.userId}</h1>
      </div>
    </div>
  );
};

export default DetailsItems;
