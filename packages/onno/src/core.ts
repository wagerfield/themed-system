import {
  Registry,
  Renderers,
  RegistryConfig,
  RegistryConfigValue,
  RendererConfig
} from "./types"
import { isArray } from "./utils"

export const registry: Registry = {}
export const renderers: Renderers = {}

export function register(config: RegistryConfig | RegistryConfig[]) {
  if (isArray(config)) config.forEach(register)
  else Object.assign(registry, config)
}

export function parse(value: RegistryConfigValue) {
  return value as RendererConfig
}

export const extend = (a: RegistryConfigValue) => (b: RegistryConfigValue) =>
  Object.assign(parse(a), parse(b))
