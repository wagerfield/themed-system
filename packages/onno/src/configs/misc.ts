import { RegistryConfig } from "../types"
import { color } from "./common"

export interface MiscConfig {
  fill: "fc"
  verticalAlign: "va"
}

export const miscConfig: RegistryConfig<MiscConfig> = {
  fill: color("fc"),
  verticalAlign: "va"
}
