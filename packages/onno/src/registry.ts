import {
  Keys,
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

export let registry: Registry = {}
export let renderers: Renderers = {}

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
    config.map(register)
  } else {
    const values: Registry = {}
    for (const key in config) {
      const value = (values[key] = parse(config[key]))
      if (isPlainObject<RendererConfig>(value)) {
        value.props = value.props ? [key].concat(value.props) : key
      }
    }
    assign(registry, values)
  }
}

export function unregister(keys: Keys) {
  for (const key of keys) {
    delete registry[key]
  }
}

export function clear() {
  renderers = {}
  registry = {}
}
