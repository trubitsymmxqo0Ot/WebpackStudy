import { EnvMode } from "./types/types";
import { Configuration } from "webpack-dev-server";
export function buildDevServer({ port }: EnvMode): Configuration {
  return {
    open: true,
    port: port ?? 3000,
    historyApiFallback: true,
    hot: true,
  };
}
