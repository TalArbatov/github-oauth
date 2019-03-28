const path = require("path");
const output = path.join(__dirname, "client", "public");

module.exports = {
  entry: "./client/src",
  output: {
    filename: "bundle.js",
    path: output
  },
  mode: 'development',
  module: {
    rules: [{
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
