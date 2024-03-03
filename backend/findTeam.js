import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import fetchData from "./utils/fetchData.js";
dotenv.config();

await connectDB(process.env.MONGO_URL);

const teamUrl = "https://api.revelsmit.in/api/v1/admin/event/team-details/";

const findTeam = async (delegate, eventId) => {
  let page = 1;
  do {
    const { data } = await fetchData(
      teamUrl + "65c63406a1d1c1f0a1f582c5" + `?page=${page}`
    );
    console.log(data);
    const foundTeam = data.docs.find((team) => team.delegate_id === delegate);
    if (foundTeam) {
      return foundTeam;
    }
    if (!data.hasNextPage) break;
    else page++;
  } while (true);
  return null;
};

findTeam();
