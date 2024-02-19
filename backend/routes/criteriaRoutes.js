import express from "express";
import { addCriteria } from "../controllers/criteriaController.js";

const router = express.Router();

// Endpoint for adding a new criteria
router.post("/add", addCriteria);

export default router;
