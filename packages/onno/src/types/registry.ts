import { Index, Key, Keys } from "./primitives"
import { Renderer, RendererConfig } from "./renderer"

export type RegistryConfigValue = Index | Key | Keys | RendererConfig

export type RegistryConfig<T = any> = {
  [K in keyof T]: RegistryConfigValue
}

export type RegistryConfigParser = (
  value: RegistryConfigValue
) => RendererConfig

export interface Registry {
  [key: string]: Renderer
}
