const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService, tokenService, authService } = require('../services');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  const { password, ...userDoc } = user.toJSON();
  res.status(httpStatus.CREATED).send({ userDoc, tokens });
});

const login = catchAsync(async (req, res) => {
  const user = await authService.loginUserWithEmailAndPassword(req.body.email, req.body.password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout();
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
};
