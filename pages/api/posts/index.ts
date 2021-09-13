// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "../../../Data/Data.json";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json(Data);
  } else if (req.method === "POST") {
    const post = req.body.post;
    const desc = req.body.desc;
    const newPost = {
      id: Date.now(),
      title: post,
      text: desc,
    };

    Data.push(newPost);

    res.status(201).json(newPost);
  }
};
