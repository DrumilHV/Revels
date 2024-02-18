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
import committeeRouter from "./Routes/CommitteeRoutes.js";
import qRrouter from "./Routes/QRRoutes.js";
import eventRouter from "./Routes/EventRoutes.js";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import cors from "cors";

const port = process.env.PORT || 8080;

const whitelist = ["http://172.20.10.13:5173", "http://localhost:5173"];

const corsOptions = {
  // origin: process.env.FRONT_END,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  credentials: true,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "x-csrf-token",
  ],
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get("/", async (req, res) => {
  res.send("Welcome to our server");
});

app.use("/api/cc", committeeRouter);
app.use("/api/QR", authenticateUser, qRrouter);
app.use("/api/events", eventRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
