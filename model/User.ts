import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  username: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a username."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
