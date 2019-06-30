import { RegistryConfig } from "../types"
import { size } from "./common"

export interface PositionConfig {
  position: "pos"
  zIndex: "zi"
  top: "t"
  right: "r"
  bottom: "b"
  left: "l"
}

export const positionConfig: RegistryConfig<PositionConfig> = {
  position: "pos",
  zIndex: {
    props: "zi",
    theme: "zIndices"
  },
  top: size("t"),
  right: size("r"),
  bottom: size("b"),
  left: size("l")
}
