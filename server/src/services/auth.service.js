const httpStatus = require('http-status');
const { userService } = require('./index');
const ApiError = require('../utils/ApiError');
const { Token } = require('../models');
const { tokenTypes } = require('../configs/tokens');

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({ token: refreshToken, type: tokenTypes.REFRESH, blacklisted: false });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  refreshTokenDoc.remove();
};

module.exports = {
  loginUserWithEmailAndPassword,
  logout,
};
