require("dotenv").config();

const { server } = require("./lib/server");

server.listen(process.env.PORT);
