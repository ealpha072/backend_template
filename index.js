import express from "express";
import config from "./utils/config.js";
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";
import appRoute from "./routes/route.js";
import cors from "cors";

logger.info("hello");
logger.info("Attemting connection to local host");

const app = express();
app.listen(config.PORT, () => {
  logger.info(`Server listening on port ${config.PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.ignoreFavicon);
app.use("/app", appRoute);
app.use(middleware.unknownEndpoint);
