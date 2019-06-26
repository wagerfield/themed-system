export * from "./types"
export * from "./constants"
export * from "./utils"
export { extend, register } from "./core"

import { register } from "./core"
import { miscConfig } from "./renderers/misc"
import { alignConfig } from "./renderers/align"
import { animationConfig } from "./renderers/animation"
import { backgroundConfig } from "./renderers/background"
import { borderConfig } from "./renderers/border"
import { displayConfig } from "./renderers/display"
import { flexParentConfig, flexChildConfig } from "./renderers/flex"
import { gridParentConfig, gridChildConfig } from "./renderers/grid"
import { outlineConfig } from "./renderers/outline"
import { overflowConfig } from "./renderers/overflow"
import { positionConfig } from "./renderers/position"
import { shadowConfig } from "./renderers/shadow"
import { sizeConfig } from "./renderers/size"

register([
  miscConfig,
  alignConfig,
  animationConfig,
  backgroundConfig,
  borderConfig,
  displayConfig,
  flexParentConfig,
  flexChildConfig,
  gridParentConfig,
  gridChildConfig,
  outlineConfig,
  overflowConfig,
  positionConfig,
  shadowConfig,
  sizeConfig
])
