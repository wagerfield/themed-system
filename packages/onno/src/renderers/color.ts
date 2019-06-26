import * as C from "csstype"
import * as T from "../types"
import { color } from "./configs"

interface ColorConfig {
  fill: [C.FillProperty, "fc"]
}

export type ColorProps = T.ResponsiveProps<ColorConfig>

export const colorConfig: T.RegistryConfig<ColorConfig> = {
  fill: color("fc")
}
