import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Proshow from "./models/Proshow.js";
dotenv.config();

await connectDB(process.env.MONGO_URL);

async function migrateDatabase() {
  const count = await Proshow.find({ e_test: true }).count();
  console.log(count);
}
migrateDatabase();
