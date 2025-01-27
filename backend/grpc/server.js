require("dotenv").config();
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { searchQuestions } = require("./services/questionService");

const path = require('path');
const PROTO_PATH = path.resolve(__dirname, 'grpc/proto/question.proto');


const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const questionProto =
  grpc.loadPackageDefinition(packageDefinition).questionsearch;

const server = new grpc.Server();

server.addService(questionProto.QuestionSearch.service, {
  SearchQuestions: searchQuestions,
});

const startGRPCServer = async () => {
  const PORT = process.env.GRPC_PORT || 50051;
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Failed to start gRPC server:", err);
        return;
      }
      console.log(`gRPC server running at http://0.0.0.0:${port}`);
    }
  );
};

module.exports = { startGRPCServer };
