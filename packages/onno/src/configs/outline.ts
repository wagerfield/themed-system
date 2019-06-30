import { RegistryConfig } from "../types"
import { border, color } from "./common"

export interface OutlineConfig {
  outline: "ol"
  outlineColor: "olc"
  outlineOffset: "olo"
  outlineStyle: "ols"
  outlineWidth: "olw"
}

export const outlineConfig: RegistryConfig<OutlineConfig> = {
  outline: border({
    propsKeys: "ol",
    themeKeys: ["outlines", "borders"]
  }),
  outlineColor: color("olc"),
  outlineOffset: border({
    propsKeys: "olo",
    themeKeys: "outlineOffsets"
  }),
  outlineStyle: {
    propsKeys: "ols",
    themeKeys: ["outlineStyles", "borderStyles"]
  },
  outlineWidth: border({
    propsKeys: "olw",
    themeKeys: ["outlineWidths", "borderWidths"]
  })
}
