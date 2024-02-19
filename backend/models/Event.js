import mongoose from "mongoose";

const EvenSchema = new mongoose.Schema({
  category_id: {
    type: mongoose.Types.ObjectId,
    required: [true, "Please provide Category ID"],
  },
  event_name: {
    type: String,
    required: [true, "Please provide Event Name"],
  },
  event_type: {
    type: String,
    enum: ["OFFLINE", "ONLINE"],
  },
  event_desc: {
    type: String,
    required: [true, "Please provide Event Description"],
  },
  team_type: {
    type: Boolean,
    required: [true, "Please provide Team Type"],
  },
  team_size_min: {
    type: Number,
  },
  team_type_max: {
    type: Number,
  },
  event_date: {
    type: Date,
    required: [true, "Please provide event date"],
  },
  event_time: {
    type: String,
    required: [true, "Please provide event time"],
  },
  venue_name: {
    type: String,
    required: [true, "Please provide venue"],
  },
  venue_longitude: {
    type: String,
  },
  venue_latitude: {
    type: String,
  },
  event_amount: {
    type: Number,
  },
  event_judge: {
    type: Boolean,
    required: [true, "Please tell if judge required"],
  },
  event_status: {
    type: String,
    enum: ["ONGOING", "STOP_REGISTRATION", "HIDE_EVENT", "CANCEL_EVENT"],
    required: [true, "Please provide event status"],
  },
});

export default mongoose.model("Event", EvenSchema);