import connectDB from "../../../db/db";
import Cart from "../../../model/cart";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cart = Cart.find();

    res.status(200).json(cart);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
