import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import cors from "cors";
import logger from "./utils/logger.js";
import middlelware from "./utils/middleware.js";
import appRoute from "./routes/route.js";

const app = express();
const PORT = config.PORT;
const URL = config.URL;
logger.info(`Attempting connection to: ${URL}`);

mongoose.set("strictQuery", true);
mongoose
  .connect(URL)
  .then(() => {
    logger.info(`Connected to database`);
    app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.use(express.json());
app.use(middlelware.requestLogger);
app.use("/app", appRoute);

app.use(middlelware.unknownEndpoint);
app.use(middlelware.errorHandler);
