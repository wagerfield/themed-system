import { Key, RegistryConfig, ParseRegistryConfig } from "../types"
import { addPx, addPcOrPx } from "../utils"
import { extend } from "../registry"

export const border = extend({
  theme: "borders",
  transform: addPx
})

export const color = extend({
  theme: "colors"
})

export const size = extend({
  theme: "sizes",
  transform: addPcOrPx
})

export const space = extend({
  theme: "spaces",
  transform: addPx
})

export const edges = <C>(key: Key, alias: Key, parse: ParseRegistryConfig) =>
  ({
    [key]: parse(alias),
    [key + "Top"]: parse(alias + "t"),
    [key + "Right"]: parse(alias + "r"),
    [key + "Bottom"]: parse(alias + "b"),
    [key + "Left"]: parse(alias + "l"),
    [key + "X"]: parse({
      props: alias + "x",
      style: [key + "Left", key + "Right"]
    }),
    [key + "Y"]: parse({
      props: alias + "y",
      style: [key + "Top", key + "Bottom"]
    })
  } as RegistryConfig<C>)
