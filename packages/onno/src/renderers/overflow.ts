import * as C from "csstype"
import * as T from "../types"

export interface OverflowConfig {
  overflow: [C.OverflowProperty, "of"]
  overflowX: [C.OverflowXProperty, "ofx"]
  overflowY: [C.OverflowYProperty, "ofy"]
}

export type OverflowProps = T.ResponsiveProps<OverflowConfig>

export const overflowConfig: T.RegistryConfig<OverflowConfig> = {
  overflow: "of",
  overflowX: "ofx",
  overflowY: "ofy"
}
