import * as C from "csstype"
import * as T from "../types"
import { color } from "./configs"

interface MiscConfig {
  fill: [C.FillProperty, "fc"]
  verticalAlign: [C.VerticalAlignProperty<T.Length>, "va"]
}

export type MiscProps = T.ResponsiveProps<MiscConfig>

export const miscConfig: T.RegistryConfig<MiscConfig> = {
  fill: color("fc"),
  verticalAlign: "va"
}
