const dotenv = require('dotenv');
const path = require('path');
const joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });
const envVarsSchema = joi
  .object()
  .keys({
    NODE_ENV: joi.string().valid('development', 'production').required(),
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().required().description('Mongo db url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`config validation error ${error.message}`);
}
module.exports = {
  env: envVars.NODE_ENV,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
  port: envVars.PORT,
};
