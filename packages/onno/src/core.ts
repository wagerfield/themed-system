import {
  Registry,
  Renderers,
  RegistryConfig,
  RegistryConfigParser,
  RegistryConfigValue,
  RendererConfig
} from "./types"
import { assign, isArray, isNumber, isObject, isString } from "./utils"

export const registry: Registry = {}
export const renderers: Renderers = {}

export const parse = (value: RegistryConfigValue): RendererConfig =>
  isArray(value) || isString(value)
    ? { propsKeys: value }
    : isNumber(value)
    ? { index: value }
    : isObject(value)
    ? value
    : {}

export const extend = (a: RegistryConfigValue): RegistryConfigParser => (
  b: RegistryConfigValue
) => assign({}, parse(a), parse(b))

export function register(config: RegistryConfig | RegistryConfig[]) {
  if (isArray(config)) {
    config.forEach(register)
  } else {
    const parsedConfig: RegistryConfig = {}
    for (const key in config) {
      const rendererConfig = parse(config[key])
      const { propsKeys } = rendererConfig
      rendererConfig.propsKeys = propsKeys ? [key].concat(propsKeys) : key
      parsedConfig[key] = rendererConfig
    }
    assign(registry, parsedConfig)
  }
}
