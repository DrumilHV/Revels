import Score from "../models/Score.js";
import Judge from "../models/Judge.js";
import Criteria from "../models/Criteria.js";

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
