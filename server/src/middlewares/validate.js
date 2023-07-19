const httpStatus = require('http-status');
const Joi = require('joi');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema) => (req, res, next) => {
  const validateSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validateSchema));
  const { value, error } = Joi.compile(validateSchema).validate(object);
  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  console.log(req);
  return next();
};

module.exports = validate;
