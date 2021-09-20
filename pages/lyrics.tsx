import { getLyrics, getSong } from "genius-lyrics-api";

const lyrics = () => {
  const options = {
    apiKey: "BH7vP0CqqynjDyH7aY5UQXtpv3euCI53nOoP7EBVOOdrki1AdtylL6Xkjja2VRxZ",
    title: "Blinding Lights",
    artist: "The Weeknd",
    optimizeQuery: true,
  };

  getLyrics(options).then((lyrics) => console.log(lyrics));

  getSong(options).then((song) =>
    console.log(`
        ${song.title}
        ${song.lyrics}`)
  );
  return <div>hi</div>;
};

export default lyrics;
