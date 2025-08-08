import { EnvMode } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { babelBuildConfig } from "./babel/babelBuildConfig";
export function buildRules(options: EnvMode): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const tsxLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/, //*Это мы не обрабатываем
    use: [
      {
        loader: require.resolve("ts-loader"),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ], //*Используем в качетсве обработчика
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
  const babelLoader = babelBuildConfig(options);
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      modulesLoader,
      "sass-loader",
    ],
  };
  return [/*tsxLoader*/ babelLoader, cssLoader, imageLoader, svgrLoader];
}
