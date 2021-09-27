import { NextApiRequest, NextApiResponse } from "next";

const { API_KEY: api_key } = process.env;
export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.themoviedb.org/4/list/7109587?page=1&api_key=${api_key}&sort_by=release_date.desc`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  const main = data.results;

  return res.status(200).json({
    main,
  });
};
