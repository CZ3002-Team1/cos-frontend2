const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    // clientLogLevel: "silent",
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: "asset/resource",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    alias: {
      Src: path.resolve(__dirname, "./src"),
      App: path.resolve(__dirname, "./src/App"),
      Commons: path.resolve(__dirname, "./src/Commons"),
      Pages: path.resolve(__dirname, "./src/Pages"),
      PintuShop: path.resolve(__dirname, "./src/Pages/PintuShop"),
      Styles: path.resolve(__dirname, "./src/Styles"),
      Fonts: path.resolve(__dirname, "./src/Styles/Fonts"),
      GlobalStyles: path.resolve(__dirname, "./src/Styles/Global"),
    },
  },
  devtool: "source-map",
};
