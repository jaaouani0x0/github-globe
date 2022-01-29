const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  devtool: "source-map",
  devServer: {
    contentBase: "./",
    writeToDisk: true,
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "./assets",
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, ""),
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "util": require.resolve("util/"),
      "vm": require.resolve("vm-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),
      "constants": require.resolve("constants-browserify"),
      "fs": false,
      "esbuild": false,
      "@swc/core": false,
      "child_process": false,
      "dgram": false,
      "worker_threads": false,
      "inspector": false
    }
  },
};