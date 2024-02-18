import mongoose from "mongoose";

const ProwshowSchema = new mongoose.Schema({
  delegate_id: {
    type: String,
    required: [true, "Please provide Delegate ID"],
  },
  full_name: {
    type: String,
    required: [true, "Please provide Delegate Name"],
  },
  email: {
    type: String,
    required: [true, "Please provide Delegate email"],
  },
  enrollment_number: {
    type: String,
    required: [true, "Please provide enrollment number"],
  },
  user_type: {
    type: String,
    enum: ["MAHE", "NONMAHE"],
    required: [true, "Please provide user type"],
  },
  day1: {
    type: Boolean,
    default: false,
  },
  day2: {
    type: Boolean,
    default: false,
  },
  day3: {
    type: Boolean,
    default: false,
  },
  test: {
    type: Boolean,
    default: true,
  },
  e_day1: {
    type: Boolean,
    default: false,
  },
  e_day2: {
    type: Boolean,
    default: false,
  },
  e_day3: {
    type: Boolean,
    default: false,
  },
  e_test: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Proshow", ProwshowSchema);
