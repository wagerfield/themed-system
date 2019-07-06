import {
  Key,
  Keys,
  Registry,
  Renderers,
  RegistryConfig,
  RendererConfig,
  ExtendRegistryConfig,
  ParseRegistryConfig
} from "./types"
import {
  uniq,
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

export function getKeys<K extends Key>(
  keys: Keys,
  unique: boolean = true,
  initial: Keys = []
): K[] {
  const result = keys.reduce((acc, key) => {
    const value = registry[key]
    const props = (value && (value as RendererConfig).props) || key
    if (isArray(value)) {
      getKeys(value, false, initial)
    } else if (isArray(props)) {
      acc.push(...props)
    } else {
      acc.push(props)
    }
    return acc
  }, initial)
  return unique ? uniq(result) : result
}
