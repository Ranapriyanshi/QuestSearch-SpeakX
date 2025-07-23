const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/searchRoute");

const app = express();

// Apply CORS middleware globally
app.use(
  cors({
    origin: ["https://questsearch-speakx-1.onrender.com", "http://localhost:3000"], // Allow only your frontend origin
    credentials: true, // Allow cookies, if needed
    methods: ["GET", "POST", "OPTIONS"], // Allowed methods
  })
);

// Enable JSON parsing
app.use(express.json());

// Add routes
app.use("/api", searchRoutes);

// get requet
app.get("/", (req, res) => {
  res.send("Hello from proxy server");
});

// Handle OPTIONS preflight requests globally
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "https://questsearch-speakx-1.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(204); // Respond with 204 (No Content)
});

module.exports = app;
