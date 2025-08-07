export type CustomPath = {
  entry: string;
  html: string;
  output: string;
};

export type Mode = "production" | "development";

export type EnvMode = {
  paths: CustomPath;
  mode: Mode;
  port: number;
  analyzer: boolean;
};
