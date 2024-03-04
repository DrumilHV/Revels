import express from "express";
import {
  addScores,
  calculateTotalScore,
} from "../controllers/scoreController.js";

const router = express.Router();

// Endpoint for adding scores
router.post("/add", addScores);
router.post("/final_score", calculateTotalScore);

export default router;
