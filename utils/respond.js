const { HELLO_RESPONSE } = require("./responses");

const respondHello = () => {
  return HELLO_RESPONSE[
    Math.floor(Math.random() * HELLO_RESPONSE.length)
  ];
};

module.exports = {
  respondHello,
};
