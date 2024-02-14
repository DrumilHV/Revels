import express from "express";
const app = express();

import morgan from "morgan";
if (process.env.NODE_ENV !== "PRODUCTION") {
  app.use(morgan("dev"));
}

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
//db and authenticate user
import connectDB from "./db/connect.js";
const port = process.env.PORT || 8080;



connectDB(
  "mongodb+srv://"
);

import userRoute from "./routes/userRoute.js";
app.use("/", userRoute);

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
