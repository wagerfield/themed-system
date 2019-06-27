import * as C from "csstype"
import * as T from "../types"
import { border, color } from "./configs"

export interface OutlineConfig {
  outline: [C.OutlineProperty<T.Length>, "ol"]
  outlineColor: [C.OutlineColorProperty, "olc"]
  outlineOffset: [C.OutlineOffsetProperty<T.Length>, "olo"]
  outlineStyle: [C.OutlineStyleProperty, "ols"]
  outlineWidth: [C.OutlineWidthProperty<T.Length>, "olw"]
}

export type OutlineProps = T.ResponsiveProps<OutlineConfig>

export const outlineConfig: T.RegistryConfig<OutlineConfig> = {
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
