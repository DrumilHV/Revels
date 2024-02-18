import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Category from "./models/Category.js";
import Event from "./models/Event.js";
import fetchData from "./utils/fetchData.js";
dotenv.config();

await connectDB(process.env.MONGO_URL);

async function deleteAllCategoriesAndEvents() {
  try {
    await Category.deleteMany({});
    await Event.deleteMany({});
    console.log("Deleted all categories and events");
  } catch (error) {
    console.error("Error deleting categories and events:", error.message);
  }
}
async function migrateDatabase() {
  await deleteAllCategoriesAndEvents();

  let page = 1;
  do {
    const { data } = await fetchData(categporyURL + `?page=${page}`);
    const categories = data.docs.map((doc) => {
      const category_type =
        doc.card_id === "63f6df9b6901fd20c5ad7dfb"
          ? "SPORTS AND WORKSHOPS"
          : doc.card_id === "63f4c8a5b80f7e5877c2c9c9"
          ? "FLAGSHIP"
          : "GENERAL";
      return {
        _id: doc._id,
        category_name: doc.category_name,
        category_type,
      };
    });
    await Category.insertMany(categories);
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  console.log("Categories migrated successfully");

  page = 1;
  do {
    const { data } = await fetchData(eventsURL + `?page=${page}`);
    const events = data.docs.map((doc) => {
      doc.card_id = undefined;
      doc.event_title = undefined;
      doc.event_year = undefined;
      doc.status = undefined;
      doc.card_name = undefined;
      doc.category_name = undefined;
      if (doc.team_type === 0) doc.team_type = false;
      else {
        doc.team_type = true;
      }
      return doc;
    });
    await Event.insertMany(events);
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  console.log("Events migrated successfully!");
}
migrateDatabase();

const categporyURL = "https://api.revelsmit.in/api/v1/admin/category/view";
const eventsURL = "https://api.revelsmit.in/api/v1/admin/event";
