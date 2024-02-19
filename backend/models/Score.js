import mongoose from "mongoose";

const scoresSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Event ID is required"],
  },
  judgeId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Judge ID is required"],
  },
  delegateId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Delegate ID is required"],
  },
  scores: [
    {
      criteriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Criteria",
      },
      score: Number,
    },
  ],
});

const Scores = mongoose.model("Scores", scoresSchema);

export default Scores;
