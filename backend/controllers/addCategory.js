import Category from "../models/Category.js";

// Controller for adding a new category
export const addCategory = async (req, res) => {
  try {
    const { category_name, category_type } = req.body;

    // Create a new category instance
    const newCategory = new Category({
      category_name,
      category_type,
    });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
