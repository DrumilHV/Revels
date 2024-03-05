import mongoose from "mongoose";

const leaderboardSchema = new mongoose.Schema({
  eventId: String,
  eventname: String,
  //     {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Event", // Reference to the Event model
  //   },
  teamid: String,
  rank: Number,
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

export default Leaderboard;
