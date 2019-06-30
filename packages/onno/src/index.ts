export * from "./constants"
export * from "./utils"
export { register, extend } from "./registry"

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
  typographyConfig
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
  typographyConfig
])
