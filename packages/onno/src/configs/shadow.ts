import { RegistryConfig } from "../types"

export interface ShadowConfig {
  boxShadow: "bsh"
  textShadow: "tsh"
}

export const shadowConfig: RegistryConfig<ShadowConfig> = {
  boxShadow: {
    propsKeys: "bsh",
    themeKeys: "boxShadows"
  },
  textShadow: {
    propsKeys: "tsh",
    themeKeys: "textShadows"
  }
}
