import { RegistryConfig } from "../types"

export interface AnimationConfig {
  animation: never
  transition: never
}

export const animationConfig: RegistryConfig<AnimationConfig> = {
  animation: {
    themeKeys: "animations"
  },
  transition: {
    themeKeys: "transitions"
  }
}
