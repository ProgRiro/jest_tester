const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "app.ts"),
  watch: true,
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/public/",
    filename: "bundle.js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: [/node_modules/],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions",
                },
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/public/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
};
