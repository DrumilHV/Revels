import mongoose from "mongoose";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const CommiteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the Name"],
  },
  password: {
    type: String,
    required: [true, "Please provide the Password"],
    select: false,
  },
  eventId: {
    type: String,
    required: [true, "Please provide the eventId"],
  },
});

CommiteeSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
});

CommiteeSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

CommiteeSchema.methods.comparePassword = async function (candidatePassword) {
  console.log(candidatePassword, this.password);
  const isMatch = await bycrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("Committee", CommiteeSchema);
