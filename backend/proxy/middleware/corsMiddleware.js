const cors = require("cors");

const corsMiddleware = cors({
  origin: "*",
  methods: ["GET", "POST"],
});

module.exports = corsMiddleware;
