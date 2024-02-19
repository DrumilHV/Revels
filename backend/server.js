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

//routers

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
// import authenticateUser from "./middleware/auth.js";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
