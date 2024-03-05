// Imports
import Event from "../models/Event.js";
import Leaderboard from "../models/Leaderboard.js";

// Add leaderboard
const addLeaderboard = async (req, res) => {
  try {
    // Get data from request
    const { eventId, position, teamId, eventname } = req.body;

    // Find the event by ID
    const event = await Event.findById(eventId);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Create new criteria doc
    const newLeaderboard = new Leaderboard({
      eventId: eventId,
      teamid: teamId,
      rank: position,
      eventname: eventname,
    });
    // Save criteria document
    console.log(newLeaderboard);
    await newLeaderboard.save();

    // Add criteria to Event document
    // event.criteria.push(newCriteria);
    // await event.save();

    res.status(201).json(newLeaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch all events of the leaderboard
const fetchLeaderboard = async (req, res) => {
  try {
    // Fetch all events from the database
    const events = await Leaderboard.find();

    // Check if there are no events
    if (events.length === 0) {
      return res.status(404).json({ error: "No events found" });
    }

    // If events are found, return them
    console.log(events);
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { addLeaderboard, fetchLeaderboard };
