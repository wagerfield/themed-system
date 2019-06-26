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
import { displayConfig } from "./renderers/display"
import { flexParentConfig, flexChildConfig } from "./renderers/flex"
import { gridParentConfig, gridChildConfig } from "./renderers/grid"
import { overflowConfig } from "./renderers/overflow"

register([
  alignConfig,
  animationConfig,
  backgroundConfig,
  borderConfig,
  colorConfig,
  displayConfig,
  flexParentConfig,
  flexChildConfig,
  gridParentConfig,
  gridChildConfig,
  overflowConfig
])
