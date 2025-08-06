import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
type Mode = "production" | "development";
type EnvMode = {
  mode: Mode;
  port: number;
};

module.exports = (env: EnvMode) => {
  const isDev = env.mode === "development";
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
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
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
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
      isDev &&
        new webpack.ProgressPlugin({
          activeModules: true,
        }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash].css",
          chunkFilename: "css/[name].[contenthash].css",
        }),
    ].filter(Boolean),
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          open: true,
          port: env.port ?? 3000,
        }
      : undefined,
  };
  return config;
};
