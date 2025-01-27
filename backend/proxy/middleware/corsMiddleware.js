const cors = require("cors");

const corsMiddleware = cors({
  origin: [
    "http://localhost:3000",
    "https://quest-search-speak-x.vercel.app",
  ],
  methods: ["GET", "POST", "OPTIONS"],
});

module.exports = corsMiddleware;
