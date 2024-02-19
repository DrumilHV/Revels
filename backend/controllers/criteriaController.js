// Imports
import Event from "../models/Event.js";
import Criteria from "../models/Criteria.js";

// Add criteria
export const addCriteria = async (req, res) => {
  try {
    // Get data from request
    const { eventId, criteria, description, minScore, maxScore, roundNumber } =
      req.body;

    // Find the event by ID
    const event = await Event.findById(eventId);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Create new criteria doc
    const newCriteria = new Criteria({
      eventId: eventId, 
      criteria,
      description,
      minScore,
      maxScore,
      roundNumber,
    });
    // Save criteria document
    await newCriteria.save();

    // Add criteria to Event document
    // event.criteria.push(newCriteria);
    // await event.save();

    res.status(201).json(newCriteria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
