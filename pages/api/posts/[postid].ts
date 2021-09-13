import Data from "../../../Data/Data.json";

import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { postid } = req.query;
  let x = Number(postid);
  const id = Data.find((id) => id.id === x);

  res.status(200).json(id);
};
