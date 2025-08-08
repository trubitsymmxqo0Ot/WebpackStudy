import webpack from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { EnvMode } from "./types/types";
import { buildOutput } from "./buildOutput";
import { buildRules } from "./buildRules";
import { buildResolve } from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevserver";

export function buildWebpack(options: EnvMode): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";
  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: buildOutput(options),
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolve(options),
    plugins: buildPlugins(options),
    devtool: isDev ? "eval-cheap-module-source-map" : "eval",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
