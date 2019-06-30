import { Key, RegistryConfig, ParseRegistryConfig } from "../types"
import { PC_SCALE, PX_SCALE } from "../constants"
import { addPx, addPcOrPx } from "../utils"
import { extend } from "../registry"

export const border = extend({
  themeKeys: "borders",
  transform: addPx
})

export const color = extend({
  themeKeys: "colors",
  lookup: {
    gray: ["#EEE", "#AAA", "#666"],
    text: "#222",
    link: "#00F"
  }
})

export const size = extend({
  themeKeys: "sizes",
  transform: addPcOrPx,
  lookup: PC_SCALE
})

export const space = extend({
  themeKeys: "spaces",
  transform: addPx,
  lookup: PX_SCALE
})

export const edges = <C>(key: Key, alias: Key, parse: ParseRegistryConfig) =>
  ({
    [key]: parse(alias),
    [key + "Top"]: parse(alias + "t"),
    [key + "Right"]: parse(alias + "r"),
    [key + "Bottom"]: parse(alias + "b"),
    [key + "Left"]: parse(alias + "l"),
    [key + "X"]: parse({
      propsKeys: alias + "x",
      styleKeys: [key + "Left", key + "Right"]
    }),
    [key + "Y"]: parse({
      propsKeys: alias + "y",
      styleKeys: [key + "Top", key + "Bottom"]
    })
  } as RegistryConfig<C>)
