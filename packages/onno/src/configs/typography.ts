import { RegistryConfig } from "../types"
import { addPx } from "../utils"
import { color } from "./common"

// type FontSmoothingValue =
//   | C.Globals
//   | "auto"
//   | "none"
//   | "antialiased"
//   | "subpixel-antialiased"

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
    props: "ff",
    theme: "fontFamilies"
  },
  fontSize: {
    props: "fs",
    theme: "fontSizes",
    transform: addPx
  },
  fontSmoothing: {
    props: "fsm",
    style: "WebkitFontSmoothing"
  },
  fontStyle: "fst",
  fontWeight: {
    props: "fw",
    theme: "fontWeights"
  },
  lineHeight: {
    props: "lh",
    theme: "lineHeights"
  },
  letterSpacing: {
    props: "ls",
    theme: "letterSpacings",
    transform: addPx
  },
  textAlign: "ta",
  textDecoration: "td",
  textTransform: "tt",
  color: color("tc")
}
