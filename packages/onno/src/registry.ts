import {
  Registry,
  Renderers,
  RegistryConfig,
  RendererConfig,
  ExtendRegistryConfig,
  ParseRegistryConfig
} from "./types"
import {
  assign,
  isArray,
  isNumber,
  isObject,
  isString,
  isPlainObject
} from "./utils"

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
    for (const key in config) {
      const value = parse(config[key])
      if (isPlainObject<RendererConfig>(value)) {
        value.props = value.props ? [key].concat(value.props) : key
      }
      parsedConfig[key] = value
    }
    assign(registry, parsedConfig)
  }
}
