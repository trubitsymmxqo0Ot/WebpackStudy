import { EnvMode } from "./types/types";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpack, { Configuration, DefinePlugin } from "webpack";

const path = require("path");

export function buildPlugins({
  mode,
  paths,
  analyzer,
  platform,
}: EnvMode): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const plugins: Configuration["plugins"] = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ].filter(Boolean);
  if (isDev) {
    //?Замедляет сборку, в проде не используем
    plugins.push(
      new webpack.ProgressPlugin({
        activeModules: true,
      }),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
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
