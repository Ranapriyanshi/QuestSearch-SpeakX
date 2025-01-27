require("dotenv").config();
const { startGRPCServer } = require("./grpc/server");
const { connectToDatabase } = require("./utils/db");

// Start both servers
const startApp = async () => {
  await connectToDatabase();

  // Start gRPC server
  startGRPCServer();

  // Start proxy server
  // require("./proxy/server");
};

startApp();
