import * as C from "csstype"
import * as T from "../types"

export interface DisplayConfig {
  display: [C.DisplayProperty, "d"]
  opacity: [T.Primitive, "o"]
  visibility: [C.VisibilityProperty, "vis"]
}

export type DisplayProps = T.ResponsiveProps<DisplayConfig>

export const displayConfig: T.RegistryConfig<DisplayConfig> = {
  display: "d",
  opacity: {
    propsKeys: "o",
    themeKeys: "opacities"
  },
  visibility: "vis"
}
