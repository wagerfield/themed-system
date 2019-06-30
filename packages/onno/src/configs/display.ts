import { RegistryConfig } from "../types"

export interface DisplayConfig {
  display: "d"
  opacity: "o"
  visibility: "vis"
}

export const displayConfig: RegistryConfig<DisplayConfig> = {
  display: "d",
  opacity: {
    props: "o",
    theme: "opacities"
  },
  visibility: "vis"
}
