import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.log("MongoDB not configured. Using sample in-memory data.");
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully.");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed. Falling back to sample data.");
    console.error(error.message);
    return false;
  }
};
