const HtmlPlugin = require("html-webpack-plugin");
const Refresh = require("@pmmmwh/react-refresh-webpack-plugin");

/**@type {import('webpack').Configuration} */
const config = {
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  entry: "./src/index.tsx",
  mode: "development",
  resolve: {
    extensions: ["...", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new Refresh(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: true,
                    refresh: true,
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        lib: {
          test: /\/components\//,
          priority: 10,
        },
      },
    },
  },
};

module.exports = config;
