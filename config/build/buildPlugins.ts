import { EnvMode } from "./types/types";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpack, { Configuration } from "webpack";
const path = require("path");

export function buildPlugins({
  mode,
  paths,
  analyzer,
}: EnvMode): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const plugins: Configuration["plugins"] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ];
  if (isDev) {
    //?Замедляет сборку, в проде не используем
    plugins.push(
      new webpack.ProgressPlugin({
        activeModules: true,
      })
    );
  }
  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
      })
    );
  }
  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
