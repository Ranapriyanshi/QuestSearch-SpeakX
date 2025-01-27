const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const path = require('path');
const PROTO_PATH = path.resolve(__dirname, 'backend/grpc/proto/question.proto');


const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const questionProto = grpc.loadPackageDefinition(packageDefinition).questionsearch;

// Create and export the gRPC client
const grpcClient = new questionProto.QuestionSearch(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = grpcClient;
