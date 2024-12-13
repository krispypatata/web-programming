import mongoose from "mongoose";

// Schema
const orderSchema = new mongoose.Schema({
  // transactionID: { type: String, required: true, unique: true }, // Custom ID for each order or just use the default MongoDB-generated _id
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  orderQuantity: { type: Number, required: true },
  orderStatus: {
    type: Number,
    enum: [0, 1, 2], // 0: Pending, 1: Completed, 2: Canceled
    required: true,
    default: 0,
  },
  email: { type: String, required: true }, // Reference to User
  dateOrdered: { type: Date, required: true, default: Date.now },
  timeOrdered: {
    type: String,
    required: true,
    default: () => new Date().toLocaleTimeString("en-US", { hour12: false }), // 24-hour format (e.g., "14:30")
  },
});

// Model(name, schema, collectionName)
// name - model name
// schema - structure of data
// collectionName - MongoDB collection name)
const Order = mongoose.model("Order", orderSchema, "orderData");

export default Order;
