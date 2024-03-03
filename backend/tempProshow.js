import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import fetchData from "./utils/fetchData.js";
import Proshow from "./models/Proshow.js";
dotenv.config();

await connectDB(process.env.MONGO_URL);

async function deleteAllProshow() {
  try {
    await Proshow.deleteMany({});
    console.log("All Proshow Deleted");
  } catch (error) {
    console.error("Error deleting proshow", error.message);
  }
}
async function migrateDatabase() {
  console.log("test");
  await deleteAllProshow();

  let page = 1;
  do {
    const { data } = await fetchData(proshowUrl + `?page=${page}`);
    const proshows = data.docs.map((doc) => {
      doc._id = undefined;
      doc.is_active = undefined;
      doc.created_at = undefined;
      doc.user_id = undefined;
      doc.mobile = undefined;
      doc.user_name = doc.full_name;
      return doc;
    });
    await Proshow.insertMany(proshows);
    console.log(proshows);
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  console.log("Proshow migrated successfully");
}
migrateDatabase();

const proshowUrl = "https://dev-api.revelsmit.in/api/v1/admin/user/user-list";
