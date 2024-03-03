import express from "express";
import { addCategory } from "../controllers/addCategory.js";

const router = express.Router();

// Endpoint for adding a new category
router.post("/add", addCategory);

export default router;
