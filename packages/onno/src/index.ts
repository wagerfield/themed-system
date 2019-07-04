export * from "./constants"
export * from "./utils"
export { register, unregister, clear, extend } from "./registry"
export { css } from "./css"
export { props } from "./props"

import { register } from "./registry"
import {
  alignParentConfig,
  alignChildConfig,
  animationConfig,
  backgroundConfig,
  borderConfig,
  displayConfig,
  flexParentConfig,
  flexChildConfig,
  gridParentConfig,
  gridChildConfig,
  miscConfig,
  outlineConfig,
  overflowConfig,
  positionConfig,
  shadowConfig,
  widthConfig,
  heightConfig,
  sizeConfig,
  marginConfig,
  paddingConfig,
  transformConfig,
  typographyConfig,
  variantConfig,
  setsConfig
} from "./configs"

register([
  alignParentConfig,
  alignChildConfig,
  animationConfig,
  backgroundConfig,
  borderConfig,
  displayConfig,
  flexParentConfig,
  flexChildConfig,
  gridParentConfig,
  gridChildConfig,
  miscConfig,
  outlineConfig,
  overflowConfig,
  positionConfig,
  shadowConfig,
  widthConfig,
  heightConfig,
  sizeConfig,
  marginConfig,
  paddingConfig,
  transformConfig,
  typographyConfig,
  variantConfig,
  setsConfig
])
