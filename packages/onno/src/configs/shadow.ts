import { RegistryConfig } from "../types"

export interface ShadowConfig {
  boxShadow: "bsh"
  textShadow: "tsh"
}

export const shadowConfig: RegistryConfig<ShadowConfig> = {
  boxShadow: {
    props: "bsh",
    theme: "boxShadows"
  },
  textShadow: {
    props: "tsh",
    theme: "textShadows"
  }
}
