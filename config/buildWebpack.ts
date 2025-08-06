import webpack from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./build/buildDevserver";
import { buildOutput } from "./build/buildOutput";
import { buildRules } from "./build/buildRules";
import { buildPlugins } from "./build/buildPlugins";
import { buildResolve } from "./buildResolve";
import { EnvMode } from "./build/types/types";

export function buildWebpack(options: EnvMode): webpack.Configuration {
  const { mode, port, paths } = options;
  const isDev = mode === "development";
  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: buildOutput(options),
    module: {
      rules: buildRules(options),
    },
    resolve: {
      extensions: buildResolve(options),
    },
    plugins: buildPlugins(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
