import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js"; // Import connectDB from the config folder

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

