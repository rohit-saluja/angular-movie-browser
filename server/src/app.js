const httpStatus = require('http-status');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const cors = require('cors');
const config = require('./configs/config');
const morgan = require('./configs/morgan');
const routes = require('./routes/v1');

const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const { jwtStrategy } = require('./configs/passport');

const app = express();
if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get("/", ()=>console.log('hi'));
// app.use(mongoSanitize);

app.use(compression());

app.use(cors());
app.options('*', cors());
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);
app.use('/v1', routes);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
