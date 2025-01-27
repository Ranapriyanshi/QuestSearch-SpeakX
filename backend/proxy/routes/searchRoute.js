const express = require("express");
const grpcClient = require("../services/grpcClient");

const router = express.Router();

router.post("/search", (req, res) => {
  const { query, type, page, limit } = req.body;

  grpcClient.SearchQuestions({ query, type, page, limit }, (error, response) => {
    if (error) {
      res.status(500).set({
        "Access-Control-Allow-Origin": req.headers.origin || "*",
        "Access-Control-Allow-Credentials": "true",
      }).send({ error: error.message });
    } else {
      res.set({
        "Access-Control-Allow-Origin": req.headers.origin || "*",
        "Access-Control-Allow-Credentials": "true",
      }).json(response);
    }
  });
});

module.exports = router;
