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
  marginConfig,
  paddingConfig,
  outlineConfig,
  overflowConfig,
  positionConfig,
  shadowConfig,
  sizeConfig,
  textConfig,
  transformConfig
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
  marginConfig,
  paddingConfig,
  outlineConfig,
  overflowConfig,
  positionConfig,
  shadowConfig,
  sizeConfig,
  textConfig,
  transformConfig
])
