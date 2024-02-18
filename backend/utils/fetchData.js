import dotenv from "dotenv";
dotenv.config();

const authToken = process.env.SUPERADMIN_AUTH;
import axios from "axios";

async function fetchData(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

export default fetchData;
