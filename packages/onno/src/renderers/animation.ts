import * as C from "csstype"
import * as T from "../types"

export interface AnimationConfig {
  animation: [C.AnimationProperty]
  transition: [C.TransitionProperty]
}

export type AnimationProps = T.ResponsiveProps<AnimationConfig>

export const animationConfig: T.RegistryConfig<AnimationConfig> = {
  animation: {
    themeKeys: "animations"
  },
  transition: {
    themeKeys: "transitions"
  }
}
