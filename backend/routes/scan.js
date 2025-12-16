// routes/scan.js
import express from "express";
import Scan from "../models/Scan.js";

const router = express.Router();

// Simple demo scan logic
router.post("/", async (req, res) => {
  try {
    const { userId, value, type } = req.body;

    // Simple risk calculation (demo)
    let riskScore = 10;
    let result = "✅ Looks safe";

    if (value.includes("free") || value.includes("win")) {
      riskScore = 80;
      result = "⚠️ High Risk! Likely scam.";
    }

    const scan = await Scan.create({ userId, value, type, riskScore, result });
    res.json(scan);
  } catch (err) {
    res.status(500).json({ error: "Scan failed" });
  }
});

export default router;
