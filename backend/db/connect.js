import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected"))
    .catch((error) => console.log("Connection failed:", error));
};

export default connectDB;