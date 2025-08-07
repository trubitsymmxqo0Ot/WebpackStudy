import path from "path";
import { CustomPath, EnvMode } from "./config/build/types/types";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";

module.exports = (env: EnvMode) => {
  const paths: CustomPath = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
  });
  return config;
};
