const cors = require("cors");

const corsMiddleware = cors({
  origin: ["http://localhost:3000", "https://quest-search-speak-x.vercel.app"], // Allowed origins
  methods: ["GET", "POST", "OPTIONS"], // Include OPTIONS for preflight requests
  allowedHeaders: ["Content-Type", "Authorization"], // Add custom headers if needed
  credentials: true, // Enable if cookies or Authorization headers are used
});

module.exports = corsMiddleware;
