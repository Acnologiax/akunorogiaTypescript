// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "../../../Data/Data.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(Data);
  }
};
