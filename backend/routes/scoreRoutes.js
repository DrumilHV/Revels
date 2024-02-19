import express from "express";
import { addScores } from "../controllers/scoreController.js";

const router = express.Router();

// Endpoint for adding scores
router.post("/add", addScores);

export default router;
