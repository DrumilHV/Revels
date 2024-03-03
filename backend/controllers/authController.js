// authController.js
import jwt from "jsonwebtoken";
import Judge from "../models/Judge.js";

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    const judge = await Judge.findOne({ Email });

    if (!judge) {
      return res.status(401).json({ error: "No such email id found" });
    }

    if (Password !== judge.Password) {
      return res.status(401).json({ error: "Password doesn't match" });
    }

    const token = jwt.sign(
      { userId: judge._id, email: judge.Email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ token, judge_id: judge._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
