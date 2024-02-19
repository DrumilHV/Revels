import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: [true, "Please provide Category Name"],
  },
  category_type: {
    type: String,
    enum: ["SPORTS AND WORKSHOPS", "GENERAL", "FLAGSHIP"],
  },
});

export default mongoose.model("Category", CategorySchema);
