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
    props: "ol",
    theme: ["outlines", "borders"]
  }),
  outlineColor: color("olc"),
  outlineOffset: border({
    props: "olo",
    theme: "outlineOffsets"
  }),
  outlineStyle: {
    props: "ols",
    theme: ["outlineStyles", "borderStyles"]
  },
  outlineWidth: border({
    props: "olw",
    theme: ["outlineWidths", "borderWidths"]
  })
}
