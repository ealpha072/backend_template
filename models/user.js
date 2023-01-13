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

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject._id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //delete hashed password
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("user", userSchema);
export default User;
