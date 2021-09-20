import { useState, useEffect } from "react";
import axios from "axios";

const Currently = () => {
  const [data, setData] = useState({ item: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spotify.com/v1/me/player/currently-playing?market=from_token",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer BQDXYTJmT-UgoFj7D8PAsHi6nZcO_gb0N1mQdwgW8TX98OdWXNx_1q0CtKv90xpxe69BReP3SH0HabZkBe6kwk7xZBa64kw-tQvz1_2z3wvAhoMdAsU5uvOzrARtOIiaM7hm1B2G_GcRSKSUqUreQmqrUXgpeU_ydbfoW6tzHuSsPYvl",
          },
        }
      );

      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      Currently Listening <br /> {data.item.artists[0].name} : {data.item.name}
    </div>
  );
};

export default Currently;
