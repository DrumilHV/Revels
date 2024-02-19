// import express from "express";
// const app = express();
// import categoryRoutes from "./routes/categoryRoutes.js";

// import morgan from "morgan";
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   app.use(morgan("dev"));
// }

// import dotenv from "dotenv";
// dotenv.config();

// // import "express-async-errors";

// //db and authenticate user
// import connectDB from "./db/connect.js";

// //routers
// app.use("/category", categoryRoutes);

// //middleware
// // import notFoundMiddleware from "./middleware/not-found.js";
// // import errorHandlerMiddleware from "./middleware/error-handler.js";
// // import authenticateUser from "./middleware/auth.js";

// // import helmet from "helmet";
// // import xss from "xss-clean";
// // import mongoSanitize from "express-mongo-sanitize";
// // import cookieParser from "cookie-parser";

// const port = process.env.PORT || 8080;

// app.use(express.json());
// // app.use(cookieParser());
// // app.use(helmet());
// // app.use(xss());
// // app.use(mongoSanitize());
// // app.use("/users", userRoutes);
// // app.use("/judges", judgeRoutes);
// // app.use("/teams", teamRoutes);

// // app.use(notFoundMiddleware);
// // app.use(errorHandlerMiddleware);

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URI);
//     app.listen(port, () => {
//       console.log(`Listening to port ${port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import criteriaRoutes from "./routes/criteriaRoutes.js";
import judgeRoutes from "./routes/judgeRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(process.env.MONGODB_URI);

const app = express();
const port = process.env.PORT || 8080;

// Middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes
app.use("/category", categoryRoutes);
app.use("/event", eventRoutes);
app.use("/criteria", criteriaRoutes);
app.use("/judge", judgeRoutes);
app.use("/scores", scoreRoutes);
// Start the server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
