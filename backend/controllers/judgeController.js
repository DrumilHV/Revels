import Judge from '../models/Judge.js';

// Controller for adding a new judge
export const addJudge = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    // Create a new judge instance
    const newJudge = new Judge({
      Name,
      Email,
      Password,
    });

    // Save the judge to the database
    const savedJudge = await newJudge.save();

    res.status(201).json(savedJudge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
