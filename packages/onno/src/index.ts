export * from "./types"
export * from "./constants"
export * from "./utils"
export { extend, register } from "./core"

import { register } from "./core"
import { alignConfig } from "./renderers/align"
import { animationConfig } from "./renderers/animation"
import { backgroundConfig } from "./renderers/background"
import { borderConfig } from "./renderers/border"
import { colorConfig } from "./renderers/color"

register([
  alignConfig,
  animationConfig,
  backgroundConfig,
  borderConfig,
  colorConfig
])
