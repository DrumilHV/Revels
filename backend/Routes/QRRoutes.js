import express from "express";
const router = express.Router();

import { eventEntry } from "../controllers/QRController.js";

router.route("/event-entry").post(eventEntry);

export default router;
