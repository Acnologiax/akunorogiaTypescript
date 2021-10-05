// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "../../../Data/Data.json";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      return res.json(Data);
    }
  }
}
