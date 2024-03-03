import mongoose from "mongoose";

const criteriaSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event", // Reference to the Event model
  },
  criteria: String,
  description: String,
  minScore: Number,
  maxScore: Number,
  roundNumber: Number,
});

const Criteria = mongoose.model("Criteria", criteriaSchema);

export default Criteria;
