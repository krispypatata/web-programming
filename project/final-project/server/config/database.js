import mongoose from "mongoose";

// Change database name here
const DB_NAME = "FarmToTable";

// Establish connection with the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectToDatabase;
