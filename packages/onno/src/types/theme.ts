import { Lookup } from "./lookup"
import { Breakpoints } from "./breakpoints"

export interface Theme {
  [key: string]: Lookup
  // Breakpoints
  breakpoints?: Breakpoints
  // Animation
  animations?: Lookup
  transitions?: Lookup
  // Border
  borders?: Lookup
  borderRadii?: Lookup
  borderStyles?: Lookup
  borderWidths?: Lookup
  // Color
  colors?: Lookup
  opacities?: Lookup
  // Layout
  sizes?: Lookup
  widths?: Lookup
  minWidths?: Lookup
  maxWidths?: Lookup
  heights?: Lookup
  minHeights?: Lookup
  maxHeights?: Lookup
  zIndices?: Lookup
  // Outline
  outlines?: Lookup
  outlineOffsets?: Lookup
  outlineStyles?: Lookup
  outlineWidths?: Lookup
  // Shadow
  boxShadows?: Lookup
  textShadows?: Lookup
  // Space
  spaces?: Lookup
  // Text
  fontSizes?: Lookup
  fontFamilies?: Lookup
  fontWeights?: Lookup
  lineHeights?: Lookup
  letterSpacings?: Lookup
  // Variants
  textStyles?: Lookup
  colorStyles?: Lookup
  inputStyles?: Lookup
  buttonStyles?: Lookup
  globalStyles?: Lookup
  // Components
  components?: Lookup
}
