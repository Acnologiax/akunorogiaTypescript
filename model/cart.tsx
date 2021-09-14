import mongoose from "mongoose";
interface Cart {
  quantity: number;
  title: string;
  price: number;
  image: string;
}
let Schema = mongoose.Schema;

let cart = new Schema<Cart>(
  {
    quantity: {
      type: Number,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  { collection: "Cart" }
);

let Cart = mongoose.model<Cart>("Cart", cart);
export default Cart;
