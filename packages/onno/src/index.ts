export * from "./types"
export * from "./constants"
export * from "./utils"
export { extend, register } from "./core"

import { register } from "./core"
import {
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
  sizeConfig,
  marginConfig,
  paddingConfig
} from "./renderers"

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
  sizeConfig,
  marginConfig,
  paddingConfig
])
