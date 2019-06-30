import { RegistryConfig } from "../types"
import { addPx } from "../utils"
import { color } from "./common"

export interface TypographyConfig {
  fontFamily: "ff"
  fontSize: "fs"
  fontSmoothing: "fsm"
  fontStyle: "fst"
  fontWeight: "fw"
  lineHeight: "lh"
  letterSpacing: "ls"
  textAlign: "ta"
  textDecoration: "td"
  textTransform: "tt"
  color: "tc"
}

export const typographyConfig: RegistryConfig<TypographyConfig> = {
  fontFamily: {
    propsKeys: "ff",
    themeKeys: "fontFamilies"
  },
  fontSize: {
    propsKeys: "fs",
    themeKeys: "fontSizes",
    transform: addPx,
    lookup: [12, 14, 16, 20, 24, 32, 40, 48, 56, 64]
  },
  fontSmoothing: {
    propsKeys: "fsm",
    styleKeys: "WebkitFontSmoothing"
  },
  fontStyle: "fst",
  fontWeight: {
    propsKeys: "fw",
    themeKeys: "fontWeights",
    lookup: {
      normal: 400,
      bold: 700
    }
  },
  lineHeight: {
    propsKeys: "lh",
    themeKeys: "lineHeights",
    lookup: {
      normal: 1.5,
      narrow: 1.25,
      single: 1
    }
  },
  letterSpacing: {
    propsKeys: "ls",
    themeKeys: "letterSpacings",
    transform: addPx
  },
  textAlign: "ta",
  textDecoration: "td",
  textTransform: "tt",
  color: color("tc")
}
