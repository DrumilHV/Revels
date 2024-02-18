import { StatusCodes } from "http-status-codes";
import BadRequestError from "../Errors/bad-request.js";
import UnauthenticatedError from "../Errors/unauthenticated.js";
import Commitee from "../models/Commitee.js";
import attachCookie from "../utils/attachCookie.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    throw new BadRequestError("Please provide all valeus!");
  }
  if (name === "PROSHOW" && password === process.env.PROSHOW_PASS) {
    const token = jwt.sign({ userId: "PROSHOW123" }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    attachCookie({ token, res });
    res.status(StatusCodes.OK).json({
      user: {
        name: "PROSHOW",
      },
    });
  }
  const user = await Commitee.findOne({ name }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  attachCookie({ token, res });
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

const getCurrentUser = async (req, res) => {
  if (req.user.userId === "PROSHOW123") {
    res.status(StatusCodes.OK).json({
      user: {
        name: "Proshow",
      },
    });
  }
  const user = await Commitee.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export { login, getCurrentUser, logout };
