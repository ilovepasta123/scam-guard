// models/Scan.js
import mongoose from "mongoose";

const ScanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  value: { type: String, required: true },
  type: { type: String, required: true }, // "website" or "phone"
  riskScore: { type: Number, required: true },
  result: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Scan", ScanSchema);
