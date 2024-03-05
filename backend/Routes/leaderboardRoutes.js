import express from "express";
import {
  addLeaderboard,
  fetchLeaderboard,
} from "../controllers/leaderboardController.js";

const router = express.Router();

// Endpoint for adding a new criteria
router.post("/addleaderboard", addLeaderboard);
router.get("/fetchleaderboard", fetchLeaderboard);

export default router;
