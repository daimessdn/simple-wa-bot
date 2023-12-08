const { qrCodeLogin, onClientReady } = require("./login");

const { respondHello, respondeTime } = require("./respond");

module.exports = {
  // login events
  qrCodeLogin,
  onClientReady,

  // respond section
  respondHello,
  respondeTime,
};
