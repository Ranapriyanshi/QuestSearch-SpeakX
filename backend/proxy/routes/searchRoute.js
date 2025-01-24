const express = require("express");
const grpcClient = require("../services/grpcClient");

const router = express.Router();

// Defining the search route
router.post("/search", (req, res) => {
  const { query, type, page, limit } = req.body;

  // Calling the gRPC service
  grpcClient.SearchQuestions({ query, type, page, limit }, (error, response) => {
    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      res.json(response);
    }
  });
});

module.exports = router;
