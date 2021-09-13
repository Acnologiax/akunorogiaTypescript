import Cartitems from "./cartitems";
const Cart = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Cartitems key={result.id} result={reuslt} />
      ))}
    </div>
  );
};

export default Cart;
