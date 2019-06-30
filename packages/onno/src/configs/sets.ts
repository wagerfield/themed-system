import { RegistryConfig } from "../types"
import { concat, keys } from "../utils"
import { alignParentConfig, alignChildConfig } from "./align"
import { backgroundConfig } from "./background"
import { borderConfig } from "./border"
import { displayConfig } from "./display"
import { flexParentConfig, flexChildConfig } from "./flex"
import { gridParentConfig, gridChildConfig } from "./grid"
import { outlineConfig } from "./outline"
import { overflowConfig } from "./overflow"
import { positionConfig } from "./position"
import { widthConfig, heightConfig } from "./size"
import { marginConfig, paddingConfig } from "./space"
import { transformConfig } from "./transform"
import { typographyConfig } from "./typography"

export interface SetsConfig {
  backgroundSet: never
  borderSet: never
  colorSet: never
  displaySet: never
  flexParentSet: never
  flexChildSet: never
  flexSet: never
  gridParentSet: never
  gridChildSet: never
  gridSet: never
  layoutSet: never
  outlineSet: never
  overflowSet: never
  positionSet: never
  widthSet: never
  heightSet: never
  sizeSet: never
  marginSet: never
  paddingSet: never
  spaceSet: never
  transformSet: never
  typographySet: never
}

// Align
const parentSet = concat("display", keys(alignParentConfig))
const childSet = concat(keys(alignChildConfig))

// Flex
const flexParentSet = concat(parentSet, keys(flexParentConfig))
const flexChildSet = concat(childSet, keys(flexChildConfig))

// Grid
const gridParentSet = concat(parentSet, keys(gridParentConfig))
const gridChildSet = concat(childSet, keys(gridChildConfig))

// Size
const widthSet = keys(widthConfig)
const heightSet = keys(heightConfig)
const sizeSet = concat("size", widthSet, heightSet)

// Space
const marginSet = keys(marginConfig)
const paddingSet = keys(paddingConfig)

// Layout
const positionSet = keys(positionConfig)
const layoutSet = concat("display", "verticalAlign", positionSet, sizeSet)

export const setsConfig: RegistryConfig<SetsConfig> = {
  backgroundSet: keys(backgroundConfig),
  borderSet: keys(borderConfig),
  colorSet: [
    "background",
    "backgroundColor",
    "borderColor",
    "color",
    "fill",
    "outlineColor"
  ],
  displaySet: keys(displayConfig),
  flexParentSet,
  flexChildSet,
  flexSet: concat(flexParentSet, flexChildSet),
  gridParentSet,
  gridChildSet,
  gridSet: concat(gridParentSet, gridChildSet),
  layoutSet,
  outlineSet: keys(outlineConfig),
  overflowSet: keys(overflowConfig),
  positionSet,
  widthSet,
  heightSet,
  sizeSet,
  marginSet,
  paddingSet,
  spaceSet: concat(marginSet, paddingSet),
  transformSet: keys(transformConfig),
  typographySet: keys(typographyConfig)
}
