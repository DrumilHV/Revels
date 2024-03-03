// Judge Event Controller
import Event from "../models/Event.js";
import Judge from "../models/Judge.js";
import Criteria from "../models/User.js";
import Score from "../models/Score.js";

// Controller for adding a new event
export const addEvent = async (req, res) => {
  try {
    const {
      category_id,
      event_name,
      event_type,
      event_desc,
      team_type,
      team_size_min,
      team_size_max,
      event_date,
      event_time,
      venue_name,
      venue_longitude,
      venue_latitude,
      event_amount,
      event_judge,
      event_status,
    } = req.body;

    // Create a new event instance
    const newEvent = new Event({
      category_id,
      event_name,
      event_type,
      event_desc,
      team_type,
      team_size_min,
      team_size_max,
      event_date,
      event_time,
      venue_name,
      venue_longitude,
      venue_latitude,
      event_amount,
      event_judge,
      event_status,
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTeams = async (req, res) => {
  try {
    const { eventId } = req.query;
    const judges = await Judge.find({ eventId }).select("teams");

    const teams = judges.reduce((acc, judge) => {
      return acc.concat(judge.teams);
    }, []);

    res.status(200).json({ teams });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const noOfRounds = async (req, res) => {
  try {
    const { eventId } = req.query;
    const criteria = await Criteria.find({ eventId: eventId });
    const uniqueRounds = [...new Set(criteria.map((c) => c.roundNumber))];

    res.status(200).json({ noOfRounds: uniqueRounds.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const overallScoreCard = async (req, res) => {
  try {
    const { eventId } = req.query;
    const judges = await Judge.find({ eventId });

    const overallScoreCard = judges.reduce((acc, judge) => {
      judge.teams.forEach((team) => {
        const delegateId = team.delegateId;
        const scores = team.scores.map((score) => ({
          criteriaId: score.criteriaId,
          score: score.score,
        }));
        acc[delegateId] = acc[delegateId]
          ? acc[delegateId].concat(scores)
          : scores;
      });
      return acc;
    }, {});

    res.status(200).json({ overallScoreCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getCriteriaByEventId = async (req, res) => {
  try {
    const { eventId } = req.query;
    console.log(eventId);

    const criteria = await Criteria.find({ eventId });
    console.log(criteria);

    res.status(200).json({ criteria });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get delegateIds for an event
export const getEventDelegateIds = async (req, res) => {
  try {
    const { eventId } = req.query;
    const judges = await Judge.find({ eventId }).select("teams");

    const teams = judges.reduce((acc, judge) => {
      return acc.concat(judge.teams);
    }, []);

    const delegateIds = teams.map((team) => team.delegateId);

    res.status(200).json({ delegateIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
