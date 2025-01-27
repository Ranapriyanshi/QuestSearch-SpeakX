const express = require("express");
const corsMiddleware = require("./middleware/corsMiddleware");
const searchRoutes = require("./routes/searchRoute");

const app = express();

// Apply middleware
app.use(corsMiddleware);
app.use(express.json());

// Add routes
app.use("/api", searchRoutes);

module.exports = app;
