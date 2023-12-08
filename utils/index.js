const { qrCodeLogin, onClientReady } = require("./login");

const { respondHello } = require("./respond");

module.exports = {
  // login events
  qrCodeLogin,
  onClientReady,

  // respond hello
  respondHello
};
