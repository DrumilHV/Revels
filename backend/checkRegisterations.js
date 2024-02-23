import connectDB from "./db/connect.js";
import Proshow from "./models/Proshow.js";
import dotenv from "dotenv";
dotenv.config();

await connectDB(process.env.MONGO_URL);

const count = async () => {
  const count = await Proshow.find({ e_test: true });
  console.log(`This is the number: ${count.length}`);
};

await count();
