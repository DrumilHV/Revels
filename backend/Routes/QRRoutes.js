import express from "express";
const router = express.Router();

import { eventEntry, proshowReg } from "../controllers/qRController.js";
import auth from "../middleware/auth.js";

router.route("/event-entry").post(auth, eventEntry);
router.route("/proshow").post(proshowReg);

export default router;
