import mongoose from "mongoose";

// Schema
const productSchema = new mongoose.Schema({
  // productID: { type: String, required: true, unique: true }, // Custom ID or just use the default MongoDB-generated _id
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productType: {
    type: Number,
    enum: [1, 2], // 1: Crop, 2: Poultry
    required: true,
  },
  productPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
});

// Model(name, schema, collectionName)
// name - model name
// schema - structure of data
// collectionName - MongoDB collection name)
const Product = mongoose.model("Product", productSchema, "productData");

export default Product;
