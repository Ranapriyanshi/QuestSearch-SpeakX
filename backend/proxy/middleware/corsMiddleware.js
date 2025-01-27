const cors = require("cors");

const corsMiddleware = cors({
  origin: "*",
  credentials: true,
  methods: ["GET", "POST"],
});

module.exports = corsMiddleware;
