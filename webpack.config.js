const path = require("path");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: [/node_modules/],
      },
    ],
  },
};
