import path from "path";
import { Configuration } from "webpack";
import { EnvMode } from "./types/types";
export function buildOutput({ paths }: EnvMode): Configuration["output"] {
  return {
    path: paths.output,
    filename: "[name].[fullhash].js",
    clean: true,
  };
}
