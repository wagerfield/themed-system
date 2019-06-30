import { RegistryConfig } from "../types"
import { color, size } from "./common"

export interface BackgroundConfig {
  background: "bg"
  backgroundColor: "bgc"
  backgroundImage: "bgi"
  backgroundPosition: "bgp"
  backgroundRepeat: "bgr"
  backgroundSize: "bgs"
}

export const backgroundConfig: RegistryConfig<BackgroundConfig> = {
  background: color("bg"),
  backgroundColor: color("bgc"),
  backgroundImage: "bgi",
  backgroundPosition: size("bgp"),
  backgroundRepeat: "bgr",
  backgroundSize: size("bgs")
}
