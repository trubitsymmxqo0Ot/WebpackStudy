const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = (env) => {
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[fullhash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader", //*Используем в качетсве обработчика
          exclude: /node_modules/, //*Это мы не обрабатываем
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"], //*Теперь импорты можно писать без расширения (import ts from 'ts[.tsx] - не нужно писать tsx')
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      //?Замедляет сборку, в проде не используем
      new webpack.ProgressPlugin({
        activeModules: true,
      }),
    ],
  };
};
