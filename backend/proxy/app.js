const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/searchRoute");

const app = express();

// Apply CORS middleware globally
app.use(
  cors({
    origin: "https://quest-search-speak-x.vercel.app", // Allow only your frontend origin
    credentials: true, // Allow cookies, if needed
    methods: ["GET", "POST", "OPTIONS"], // Allowed methods
  })
);

// Enable JSON parsing
app.use(express.json());

// Add routes
app.use("/api", searchRoutes);

// Handle OPTIONS preflight requests globally
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(204); // Respond with 204 (No Content)
});

module.exports = app;
