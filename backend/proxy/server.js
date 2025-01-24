const app = require("./app");

const PORT = process.env.PROXY_PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
