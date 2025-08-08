export type CustomPath = {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
};

export type Mode = "production" | "development";
export type Platform = "mobile" | "desktop";

export type EnvMode = {
  paths?: CustomPath;
  mode?: Mode;
  port?: number;
  analyzer?: boolean;
  platform?: Platform;
};
