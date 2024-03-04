import Score from "../models/Score.js";
import Judge from "../models/Judge.js";
import Criteria from "../models/Criteria.js";
import _ from "lodash";

export const addScores = async (req, res) => {
  try {
    const { eventId, judgeId, delegateId, criteriaId, score, roundNumber } =
      req.body;

    const criteria = await Criteria.findById(criteriaId);
    if (!criteria || score < criteria.minScore || score > criteria.maxScore) {
      return res.status(400).json({ error: "Invalid score" });
    }

    let existingScores = await Score.findOne({
      eventId,
      judgeId,
      delegateId,
      roundNumber,
    });

    if (existingScores) {
      existingScores.scores.push({ criteriaId, score });
      await existingScores.save();
    } else {
      existingScores = await Score.create({
        eventId,
        judgeId,
        delegateId,
        roundNumber,
        scores: [{ criteriaId, score }],
      });
    }

    let judge = await Judge.findById(judgeId);

    if (judge) {
      if (!judge.eventId.includes(eventId)) {
        judge.eventId.push(eventId);
      }

      const teamIndex = judge.teams.findIndex(
        (team) => team.delegateId === delegateId
      );

      if (teamIndex === -1) {
        judge.teams.push({
          delegateId,
          scores: [{ criteriaId, score }],
        });
      } else {
        judge.teams[teamIndex].scores.push({ criteriaId, score });
      }

      await judge.save();
    }

    res.status(200).json(existingScores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const calculateTotalScore = async (req, res) => {
  const { delegateId } = req.body;
  // console.log("Delegate ID:", delegateId);

  try {
    // Use populate to include the Criteria data for each score
    const scores = await Score.find({ delegateId }).populate(
      "scores.criteriaId"
    );

    // Group scores by round
    const scoresByRound = _.groupBy(scores, (score) => {
      return score.scores[0].criteriaId.roundNumber;
    });

    // Calculate avg score per round
    const roundScores = [];
    for (let round in scoresByRound) {
      let roundCriteria = scoresByRound[round];
      let totalScore = 0;

      roundCriteria.forEach((score) => {
        totalScore += score.scores[0].score;
      });

      let avgScore = totalScore / roundCriteria.length;
      roundScores.push(avgScore);
    }
    // console.log("Round Scores:", roundScores);

    // Calculate total score
    let totalScore = 0;
    roundScores.forEach((score) => {
      totalScore += score;
    });
    // console.log("Total Score:", totalScore);
    // totalScore = totalScore / roundScores.length;

    res.json({
      roundScores,
      totalScore,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
