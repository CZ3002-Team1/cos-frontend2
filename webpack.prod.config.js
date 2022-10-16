const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: "production",
  entry: [
    "regenerator-runtime/runtime.js",
    path.resolve(__dirname, "src", "index.js"),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
    publicPath: "/",
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
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
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
};
