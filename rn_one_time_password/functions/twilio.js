const twilio = require('twilio');
const twilioAccount = require('./twilio_account.json');

const accountSid = twilioAccount.accountSid;
const authToken = twilioAccount.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);