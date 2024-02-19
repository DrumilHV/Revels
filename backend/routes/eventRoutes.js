import express from "express";
import {
  addEvent,
  getTeams,
  noOfRounds,
  overallScoreCard,
} from "../controllers/eventController.js";

const router = express.Router();

// Endpoint for adding a new event
router.post("/add", addEvent);
router.get("/getTeams", getTeams);

router.get("/noOfRounds", noOfRounds);

router.get("/overallScoreCard", overallScoreCard);

export default router;
