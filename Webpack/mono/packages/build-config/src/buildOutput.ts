import path from "path";
import { Configuration } from "webpack";
import { EnvMode } from "./types/types";
export function buildOutput({ paths, mode }: EnvMode): Configuration["output"] {
  const isDev = mode === "development";
  return {
    path: paths.output,
    filename: "[name].[fullhash].js",
    chunkFilename: "[name].[fullhash].js",
    clean: true,
  };
}
