const express = require("express");
const corsMiddleware = require("./middleware/corsMiddleware");
const searchRoutes = require("./routes/searchRoute");

const app = express();

// Apply middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://quest-search-speak-x.vercel.app",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // If cookies or Authorization headers are used
  })
);
app.use(express.json());

// Add routes
app.use("/api", searchRoutes);

app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(204); // Respond OK without content
});

module.exports = app;
