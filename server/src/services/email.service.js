const nodemailer = require('nodemailer');
const config = require('../configs/config');
const logger = require('../configs/logger');

const transport = nodemailer.createTransport(config.email.smtp);

if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('connected to email server'))
    .catch(() => logger.warn('Unable to connect to email'));
}

const sendMail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  const resetLink = `http://url/reset-password/token=${token}`;
  const text = `Dear user, this is the reset password link please click here ${resetLink}`;
  await sendMail(to, subject, text);
};

const sendVerificationEmail = async (to, token) => {
  const subject = 'Verify Email';
  const link = `http://url/verify-email/token=${token}`;
  const text = `Dear user please click on the verfy link ${link}`;
  await sendMail(to, subject, text);
};

module.exports = {
  sendMail,
  sendResetPasswordEmail,
  sendVerificationEmail,
};
