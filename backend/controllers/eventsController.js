import Category from "../models/Category.js";

export const eventsDropDown = async (req, res) => {
  const categories = await Category.aggregate([
    {
      $lookup: {
        from: "events",
        localField: "_id",
        foreignField: "category_id",
        as: "events",
      },
    },
    {
      $group: {
        _id: "$category_type",
        categories: {
          $push: {
            category_name: "$category_name",
            events: "$events.event_name",
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        category_type: "$_id",
        categories: 1,
      },
    },
  ]);

  res.json(categories);
};

export const getEvents = async (req, res) => {
  const categories = await Category.aggregate([
    {
      $lookup: {
        from: "events",
        localField: "_id",
        foreignField: "category_id",
        as: "events",
      },
    },
    {
      $group: {
        _id: "$category_type",
        categories: {
          $push: {
            category_name: "$category_name",
            events: "$events",
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        category_type: "$_id",
        categories: 1,
      },
    },
  ]);
  res.json(categories);
};
