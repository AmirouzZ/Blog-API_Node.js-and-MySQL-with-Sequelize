const http = require("http");
const { app } = require("./app.js");

const dotenv = require("dotenv");
dotenv.config();

const server = http.createServer(app);

let port = process.env.PORT || 5000;

const db = require("./models");

db.sequelize.sync({ alter: true }).then(() => {
  server.listen(port, (error) => {
    if (error) {
      console.log("Server not started:", error.message);
    }
    console.log("Server is running on port:", port);
  });
});
