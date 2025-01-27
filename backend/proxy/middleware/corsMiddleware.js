const cors = require("cors");

const corsMiddleware = cors({
  origin: [
    "http://localhost:3000", // Local development
    "https://quest-search-speak-x.vercel.app", // Production
  ],
  methods: ["GET", "POST", "OPTIONS"], // Allow these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  credentials: true, // If cookies or Authorization headers are being used
});

module.exports = corsMiddleware;
