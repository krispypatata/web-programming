import mongoose from 'mongoose';

// Schema
const salesReportSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantitySold: { type: Number, required: true },
  totalSales: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

// Model(name, schema, collectionName)
// name - model name
// schema - structure of data
// collectionName - MongoDB collection name)
const SalesReport = mongoose.model("SalesReport", salesReportSchema, "salesData");

export default SalesReport;
