const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

const pages = ["index", "second"];

const generatePages = () =>
  pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `./pages/${page}.html`,
        inject: true,
        chunks: ["app"],
      })
  );

const config = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true, // remove unused bundled files
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
  },
  plugins: [...generatePages()],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
