import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: [true, "Cannot be blank"],
    unique: true,
  },
  passwordHash: String,
});

const User = mongoose.model("users", userSchema);
export default User;
