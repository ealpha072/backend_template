import config from "./utils/config.js";
import express from "express";
import logger from "./utils/logger.js";
import middleware from "./utils/middleware.js";
import appRoute from "./routes/route.js";
import cors from "cors";
import morgan from "morgan";

logger.info("Attempting connection to local host");

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.ignoreFavicon)

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Server listening on port ${config.PORT}`);
});
