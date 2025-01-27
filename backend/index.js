require("dotenv").config();
const { startGRPCServer } = require("./grpc/server");
const { connectToDatabase } = require("./utils/db");
const app = require("./proxy/app");

const PORT = process.env.PROXY_PORT || 5000;

// Start the Express server

// Start both servers
const startApp = async () => {
  await connectToDatabase();

  // Start gRPC server
  startGRPCServer();

  // Start proxy server
  app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
  });
};

startApp();
