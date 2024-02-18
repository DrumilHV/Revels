import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, try again after 15 minutes",
});

import {
  login,
  getCurrentUser,
  logout,
} from "../controllers/CommitteeController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/login").post(apiLimiter, login);
router.route("/getCurrentUser").get(authenticateUser, getCurrentUser);
router.route("/logout").get(logout);

export default router;
