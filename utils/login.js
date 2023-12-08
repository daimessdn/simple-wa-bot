const qrcode = require("qrcode-terminal");

// login via QR code
const qrCodeLogin = (qr) => {
  qrcode.generate(qr, { small: true });
};

// events on client ready
const onClientReady = () => {
  console.log("client is ready");
};

module.exports = {
  qrCodeLogin,
  onClientReady,
};
