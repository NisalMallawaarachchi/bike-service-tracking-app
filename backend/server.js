import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Bike Service Tracking App Backend is running!");
});

// Connect to database and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
});
