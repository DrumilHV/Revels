import dotenv from "dotenv";
dotenv.config();

const authToken = process.env.SUPERADMIN_AUTH;
import axios from "axios";

import crypto from "crypto-js";

const secretKey = "mysecretkeysecretrevels";

const decrypt = (encryptedText, secretKey) => {
  var encryptedData = encryptedText.data;
  if (encryptedData) {
    const bytes = crypto.AES.decrypt(encryptedData, secretKey);
    const decryptedText = bytes.toString(crypto.enc.Utf8);
    return JSON.parse(decryptedText);
  }
};

async function fetchData(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return decrypt(response.data, secretKey);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

export default fetchData;
