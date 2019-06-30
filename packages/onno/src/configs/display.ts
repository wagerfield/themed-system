import { RegistryConfig } from "../types"

export interface DisplayConfig {
  display: "d"
  opacity: "o"
  visibility: "vis"
}

export const displayConfig: RegistryConfig<DisplayConfig> = {
  display: "d",
  opacity: {
    propsKeys: "o",
    themeKeys: "opacities"
  },
  visibility: "vis"
}
