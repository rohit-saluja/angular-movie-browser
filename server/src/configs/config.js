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
    JWT_SECRET: joi.string().required().description('jwt secret token'),
    JWT_ACCESS_EXPIRATION_MINUTES: joi.string().required().description('jwt access expiration time in minutes'),
    JWT_REFRESH_EXPIRATION_DAYS: joi.number().default(30).description('days after which refresh tokens expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: joi.number().default(30).description('minutes after which email expires'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: joi.number().default(30).description('minutes for password reset'),
    SMTP_HOST: joi.string().description('host address for email'),
    SMTP_PORT: joi.string().description('smtp port'),
    SMTP_USERNAME: joi.string().optional().allow('').description('smtp port'),
    SMTP_PASSWORD: joi.string().optional().allow('').description('password for smtp server'),
    SMTP_KEY: joi.string().required().description('password for smtp server'),
    EMAIL_FROM: joi.string(),
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
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    key: envVars.SMTP_KEY,
    from: envVars.EMAIL_FROM,
  },
};
