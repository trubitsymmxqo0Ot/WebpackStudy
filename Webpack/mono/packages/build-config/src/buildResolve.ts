import { ResolveOptions } from "webpack";
import { EnvMode } from "./types/types";

export function buildResolve(option: EnvMode): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //*Теперь импорты можно писать без расширения (import ts from 'ts[.tsx] - не нужно писать tsx')
    alias: {
      "@": option.paths.src,
    },
  };
}
