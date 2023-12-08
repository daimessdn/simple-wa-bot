const { Client, LocalAuth } = require("whatsapp-web.js");

const { qrCodeLogin, onClientReady, respondHello } = require("./utils");

// init client
const client = new Client({
  authStrategy: new LocalAuth(),
});

// pre-auth section
client.on("qr", qrCodeLogin);
client.on("ready", onClientReady);

// chatbot section
client.on("message", async (msg) => {
  // 1. get lowercase message
  const lowMsg = msg.body.toLowerCase();

  // 2. respond hello message
  const helloMsg = ["hello", "hi"];
  helloMsg.forEach((msgItem, index) => {
    if (lowMsg.includes(msgItem)) {
      msg.reply(respondHello());
    }
  });
});
