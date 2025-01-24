// const express = require("express");
// const cors = require("cors");  // Import the cors package
// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const { SearchQuestions } = require("../services/questionService");

// const app = express();

// // Enable CORS for all routes (you can also specify certain origins if needed)
// app.use(cors());

// // Your gRPC setup and other code...
// app.use(express.json());

// // Example proxy route
// app.post("/search", (req, res) => {
//   const { query, type, page, limit } = req.body;

//   // gRPC client setup
//   const packageDefinition = protoLoader.loadSync("./proto/question.proto", {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     arrays: true,
//   });
//   const questionProto = grpc.loadPackageDefinition(packageDefinition).questionsearch;
//   const client = new questionProto.QuestionSearch(
//     "localhost:50051",
//     grpc.credentials.createInsecure()
//   );

//   // Call the gRPC service
//   client.SearchQuestions({ query, type, page, limit }, (error, response) => {
//     if (error) {
//       res.status(500).send({ error: error.message });
//     } else {
//       res.json(response);
//     }
//   });
// });

// // Start the Express server
// app.listen(5000, () => {
//   console.log("Proxy server running at http://localhost:5000");
// });
