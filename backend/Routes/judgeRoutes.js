import express from "express";
import { addJudge } from "../controllers/judgeController.js";

const router = express.Router();

// Endpoint for adding a new judge
router.post("/add", addJudge);

export default router;
