import Image from "next/image";

const ImagesItems = ({ result }) => {
  return (
    <div>
      <div className="flex flex-col justify-center pl-4 mx-0 ">
        <h1 className="text-md tracking-widest"> {result.author} </h1>
        <Image src={result.download_url} width={600} height={400} />
      </div>
    </div>
  );
};

export default ImagesItems;
