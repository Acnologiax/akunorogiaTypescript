import { useState } from "react";
const Posts = () => {
  const [post, setPost] = useState("");
  const [desc, setDesc] = useState("");

  const submitPost = async () => {
    const res = await fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      body: JSON.stringify({ post, desc }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  };
  return (
    <div className="flex flex-col p-4 space-y-2  justify-center items-center">
      <h1>input</h1>
      <input
        className="border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 "
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="border border-gray-400 text-sm w-48 h-48 focus:outline-none focus:ring-1 focus:ring-gray-300 p-1"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <button
        className="uppercase rounded-lg py-2 border-2 w-20 tracking-widest "
        onClick={submitPost}
      >
        Submit
      </button>
    </div>
  );
};

export default Posts;
