import express from "express";
const user = express();

import multer from "multer";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, "public")));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});
 

var upload = multer({ storage: storage });


import userController from "../controllers/userController.js";
// const exp = require("constants");
user.post("/importUser", upload.single("file"), function (req, res) {
   userController(req,res).importUser;
});  

export default user;