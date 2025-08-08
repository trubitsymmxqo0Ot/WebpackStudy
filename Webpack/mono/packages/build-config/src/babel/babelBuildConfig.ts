import { EnvMode } from "../types/types";
import { pluginName } from "mini-css-extract-plugin";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";

export function babelBuildConfig({ mode }: EnvMode) {
  const isDev = mode === "development";
  const plugins = [];
  if (!isDev) {
    plugins.push([removeDataTestIdBabelPlugin, { props: ["data-testid"] }]);
  }
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
        plugins: plugins,
      },
    },
  };
}
