import {
  Registry,
  Renderers,
  RegistryConfig,
  ExtendRegistryConfig,
  ParseRegistryConfig
} from "./types"
import { assign, isArray, isNumber, isObject, isString } from "./utils"

export const registry: Registry = {}
export const renderers: Renderers = {}

export const parse: ParseRegistryConfig = (value) =>
  isString(value)
    ? { props: value }
    : isNumber(value)
    ? { index: value }
    : isObject(value)
    ? value
    : {}

export const extend: ExtendRegistryConfig = (a) => (b) =>
  assign({}, parse(a), parse(b))

export function register(config: RegistryConfig | RegistryConfig[]) {
  if (isArray(config)) {
    config.forEach(register)
  } else {
    const parsedConfig: RegistryConfig = {}
    // for (const key in config) {
    //   const rendererConfig = parse(config[key])
    //   const { propsKeys } = rendererConfig
    //   rendererConfig.propsKeys = propsKeys ? [key].concat(propsKeys) : key
    //   parsedConfig[key] = rendererConfig
    // }
    assign(registry, parsedConfig)
  }
}
