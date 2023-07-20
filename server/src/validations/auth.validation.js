const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshToken = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
};
