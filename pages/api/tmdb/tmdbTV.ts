import { NextApiRequest, NextApiResponse } from "next";

const { API_KEY: api_key } = process.env;
export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/list/7109601?api_key=${api_key}&language=en-US`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  const main = data.items;

  return res.status(200).json({
    main,
  });
};
