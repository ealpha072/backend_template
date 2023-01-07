import logger from "./logger.js";

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:", req.path);
  logger.info("Body:", req.body);
  logger.info("-------------");

  next();
};

const unknownEndpoint = (req, res) => {
  res.status(400).json({ error: "Unknownendpoint" });
};

const ignoreFavicon = (req, res, next) => {
  if (req.originalUrl.includes("/favicon.ico")) {
    res.status(200).end();

    next();
  }
};

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  next(error);
};

export default { requestLogger, unknownEndpoint,errorHandler, ignoreFavicon };
