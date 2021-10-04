import Data from "../../../Data/Data.json";

import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { quoteid } = req.query;
  let x = Number(quoteid);
  const id = Data.find((id) => id.id === x);

  res.status(200).json(id);
};
