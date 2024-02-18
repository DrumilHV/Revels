import connectDB from "./db/connect.js";
import Event from "./models/Event.js";
import Commitee from "./models/Commitee.js";
import bycrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

await connectDB(process.env.MONGO_URL);

function generateThreeDigitNumber() {
  const randomNumber = Math.floor(Math.random() * 900) + 100;
  const numberString = randomNumber.toString();
  return numberString;
}

async function deleteAllComm() {
  try {
    await Commitee.deleteMany({});
    console.log("Deleted all committees");
  } catch (error) {
    console.error("Error deleting categories and events:", error.message);
  }
}

async function createUsers() {
  await deleteAllComm();
  const events = await Event.find({});
  const users = await Promise.all(
    events.map(async (event) => {
      const pass = event.event_name.split(" ")[0] + generateThreeDigitNumber();
      console.log(`${event.event_name} : ${pass}`);
      const salt = await bycrypt.genSalt(10);
      const password = await bycrypt.hash(pass, salt);
      return {
        name: event.event_name,
        password,
        eventId: event._id,
      };
    })
  );

  await Commitee.insertMany(users);
  console.log("Created all users");
}

await createUsers();
