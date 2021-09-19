const dotenv = require("dotenv");
dotenv.config();

module.exports =
  process.env.REACT_APP_NODE_ENV === "development"
    ? require("./webpack.config.dev")
    : require("./webpack.config.prod");
