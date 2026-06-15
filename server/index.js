import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./config/database.js";
import env from "./config/env.js";

async function startServer() {
  await connectDatabase();

  const server = app.listen(env.port, () => {
    console.log(`Portfolio API listening on port ${env.port}`);
  });

  const shutdown = (signal) => {
    console.log(`${signal} received. Closing HTTP server.`);
    server.close(() => process.exit(0));
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

startServer().catch((error) => {
  console.error("Unable to start the API:", error.message);
  process.exit(1);
});
