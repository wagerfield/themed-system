import {
  Registry,
  Renderers,
  RegistryConfig,
  RegistryConfigValue,
  RendererConfig
} from "./types"
import { assign, isArray } from "./utils"

export const registry: Registry = {}
export const renderers: Renderers = {}

export function register(config: RegistryConfig | RegistryConfig[]) {
  if (isArray(config)) {
    config.forEach(register)
  } else {
    assign(registry, config)
  }
}

export function parse(value: RegistryConfigValue) {
  return value as RendererConfig
}

export const extend = (a: RegistryConfigValue) => (b: RegistryConfigValue) =>
  assign(parse(a), parse(b))
