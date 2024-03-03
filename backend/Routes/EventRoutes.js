import express from "express";

const router = express.Router();

import {
  addEvent,
  getTeams,
  noOfRounds,
  overallScoreCard,
  getAllEvents,
  getEventDelegateIds,
  getCriteriaByEventId,
} from "../controllers/eventController.js";
import { eventsDropDown, getEvents } from "../controllers/eventsController.js";

router.post("/add", addEvent);
router.get("/getTeams", getTeams);

router.get("/noOfRounds", noOfRounds);

router.get("/overallScoreCard", overallScoreCard);
router.get("/getAllEvents", getAllEvents);

router.get("/delegateids", getEventDelegateIds);
router.get("/criteria", getCriteriaByEventId);

router.route("/dropdown").get(eventsDropDown);
router.route("/details").get(getEvents);

export default router;
