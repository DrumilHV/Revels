import mongoose from "mongoose";
import user from "../models/FileData.js";
import csv from "csvtojson";

var model = mongoose.model("FileData", user);

const importUser = async (req, res) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        console.log(jsonObj);
        await model.insertMany(jsonObj);
      });

    res.send({
      status: 200,
      message: "User imported successfully",
      success: true,
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "Theres is an error while importing user",
      success: false,
      error: "error.message",
    });
  }
};

export default importUser;
