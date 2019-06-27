import { Key, RegistryConfig, RegistryConfigParser } from "../types"
import { PC_SCALE, PX_SCALE } from "../constants"
import { addPx, addPcOrPx } from "../utils"
import { extend } from "../core"

export const border = extend({
  themeKeys: "borders",
  transform: addPx
})

export const color = extend({
  themeKeys: "colors",
  defaults: {
    gray: ["#EEE", "#AAA", "#666"],
    text: "#222",
    link: "#00F"
  }
})

export const size = extend({
  themeKeys: "sizes",
  transform: addPcOrPx,
  defaults: PC_SCALE
})

export const space = extend({
  themeKeys: "spaces",
  transform: addPx,
  defaults: PX_SCALE
})

export const edges = (
  key: Key,
  alias: Key,
  parser: RegistryConfigParser
): RegistryConfig => ({
  [key]: parser(alias),
  [key + "Top"]: parser(alias + "t"),
  [key + "Right"]: parser(alias + "r"),
  [key + "Bottom"]: parser(alias + "b"),
  [key + "Left"]: parser(alias + "l"),
  [key + "X"]: parser({
    propsKeys: alias + "x",
    styleKeys: [key + "Left", key + "Right"]
  }),
  [key + "Y"]: parser({
    propsKeys: alias + "y",
    styleKeys: [key + "Top", key + "Bottom"]
  })
})
