require("dotenv").config();

const { server } = require("./lib/server");
const twitterStream = require("./lib/twitter");

server.listen(process.env.PORT);
