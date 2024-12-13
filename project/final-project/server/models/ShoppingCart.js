import mongoose from 'mongoose';

// Schema
const shoppingCartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, default: 0 }
});

// Model(name, schema, collectionName)
// name - model name
// schema - structure of data
// collectionName - MongoDB collection name)
const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema, "cartData");

export default ShoppingCart;
