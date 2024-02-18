import mongoose, { mongo } from "mongoose";

const EntanceSchema = new mongoose.Schema({
  delegateId: {
    type: String,
    required: [true, "please give the delegateId"],
  },
  eventId: {
    type: mongoose.Types.ObjectId,
    required: [true, "please give the event details"],
  },
  timestamp: {
    type: Number,
  },
});

export default mongoose.model("Entrance", EntanceSchema);
