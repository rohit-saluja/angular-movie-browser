const mongoose = require('mongoose');
const app = require('./app');
const config = require('./configs/config');
const logger = require('./configs/logger');
const checkAndInsert = require('./inser-data');

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to the mongo db');
  server = app.listen(process.env.PORT || config.port, () => {
    logger.info(`Listening to the port ${config.port}`);
  });
});

checkAndInsert();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info(`Server closed`);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
