import express from "express";
import mongoose from "mongoose";
import config from "./utils/config.js";
import cors from "cors";
import logger from "./utils/logger.js";
import middlelware from "./utils/middleware.js";
import appRoute from "./routes/route.js";

logger.info("Attempting connectiong ot localhost");

const app = express();
const PORT = config.PORT;
const URL = config.URL;

mongoose.connect(URL).then();

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});

app.use(express.json());
app.use(middlelware.requestLogger);
app.use("/app", appRoute);

app.use(middlelware.unknownEndpoint);
