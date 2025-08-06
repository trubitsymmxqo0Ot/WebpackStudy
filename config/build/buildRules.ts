import { EnvMode } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
export function buildRules({ mode }: EnvMode): ModuleOptions["rules"] {
  const isDev = mode === "development";

  const tsxLoader = {
    test: /\.tsx?$/,
    use: "ts-loader", //*Используем в качетсве обработчика
    exclude: /node_modules/, //*Это мы не обрабатываем
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };
  return [tsxLoader, cssLoader];
}
