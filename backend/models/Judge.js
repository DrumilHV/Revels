import mongoose from "mongoose";

const judgeSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  eventId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", // Reference to the Event model
    },
  ],
  teams: [
    {
      delegateId: {
        type: String,
      },
      scores: [
        {
          criteriaId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Criteria", // Reference to the Criteria model
          },
          score: Number,
        },
      ],
    },
  ],
});

const Judge = mongoose.model("Judge", judgeSchema);

export default Judge;
