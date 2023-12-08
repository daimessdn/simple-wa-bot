const { HELLO_RESPONSE } = require("./responses");

const respondHello = () => {
  return HELLO_RESPONSE[
    Math.floor(Math.random() * HELLO_RESPONSE.length)
  ];
};

// function to respond time
const respondeTime = () => {
  const currentTime = new Date();
  const replyMsg = `The time is ${currentTime.toLocaleTimeString("uk-UK")}`;

  return replyMsg;
}

module.exports = {
  respondHello,
  
  respondeTime
};
