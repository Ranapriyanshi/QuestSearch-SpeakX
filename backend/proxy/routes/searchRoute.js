const express = require("express");
const grpcClient = require("../services/grpcClient");

const router = express.Router();

router.post("/search", (req, res) => {
  const contentType = req.headers["content-type"];

  const { query, type, page, limit } = req.body;

  grpcClient.SearchQuestions({ query, type, page, limit }, (error, response) => {
    if (error) {
      res.status(500).send({ error: error.message });
    } else {
      res.json(response);
    }
  });
});

module.exports = router;
