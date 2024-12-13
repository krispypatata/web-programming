import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  userType: {
    type: String,
    enum: ["customer", "admin", "merchant"],
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Model(name, schema, collectionName)
// name - model name
// schema - structure of data
// collectionName - MongoDB collection name)
const User = mongoose.model("User", userSchema, "userData");

export default User;
