import { VscLoading } from "react-icons/vsc";

const HomeLoading = () => {
  return (
    <div>
      <div className="text-md pt-28  flex flex-col justify-center items-center ">
        <VscLoading className="animate-spin text-3xl " />
        <h1 className="pt-8">
          Welcome to <span className="text-mine"> Aku</span>
          <span className="text-mine2">noro</span>
          <span className="text-mine">gia </span>
          website
        </h1>
        <h1>Hang in there for a moment ...</h1>
      </div>
    </div>
  );
};

export default HomeLoading;
