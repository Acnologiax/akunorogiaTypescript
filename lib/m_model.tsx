import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postId: { type: Number, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { collection: "post" }
);

const PostModel = mongoose.model("PostModel", postSchema);

export default PostModel;
