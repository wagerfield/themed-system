import * as C from "csstype"
import * as T from "../types"

export interface ShadowConfig {
  boxShadow: [C.BoxShadowProperty, "bsh"]
  textShadow: [C.TextShadowProperty, "tsh"]
}

export type ShadowProps = T.ResponsiveProps<ShadowConfig>

export const shadowConfig: T.RegistryConfig<ShadowConfig> = {
  boxShadow: {
    propsKeys: "bsh",
    themeKeys: "boxShadows"
  },
  textShadow: {
    propsKeys: "tsh",
    themeKeys: "textShadows"
  }
}
