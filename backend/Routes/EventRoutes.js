import express from "express";
const router = express.Router();

import { eventsDropDown, getEvents } from "../controllers/eventsController.js";

router.route("/dropdown").get(eventsDropDown);
router.route("/details").get(getEvents);

export default router;
