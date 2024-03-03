// import mongoose, { mongo } from "mongoose";

// const connectDB = (url) => {
//   return mongoose.connect(url);
// };

// export default connectDB;
import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
