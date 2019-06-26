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

export const layout = extend({
  transform: addPcOrPx,
  defaults: PC_SCALE
})

export const space = extend({
  themeKeys: "spaces",
  transform: addPx,
  defaults: PX_SCALE
})
