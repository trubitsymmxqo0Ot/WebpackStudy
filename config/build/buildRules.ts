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

  const modulesLoader = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      modulesLoader,
      "sass-loader",
    ],
  };
  return [tsxLoader, cssLoader, imageLoader, svgrLoader];
}
