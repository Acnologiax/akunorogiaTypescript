import Image from "next/image";
import Link from "next/link";

const CardItems = ({ result }) => {
  const handleSubmission = async () => {
    const info = {
      title: result.title,
      cost: result.price,
      img: result.image,
    };

    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col p-4 justify-start items-center border rounded-2xl shadow-xl h-96 w-96 ">
        <Image src={result.image} width={200} height={200} />
        <p className="text-sm font-bold  py-2">{result.title}</p>
        <p className="whitespace-normal text-sm pb-4">{result.description}</p>
        <h1 className="">{result.price}$</h1>
        <Link href={`/${result.id}`}>
          <a>More Details</a>
        </Link>
        <button onClick={handleSubmission}>add to cart</button>
      </div>
    </div>
  );
};

export default CardItems;
