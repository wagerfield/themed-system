import * as C from "csstype"
import * as T from "../types"
import { addPx } from "../utils"
import { color } from "./configs"

type FontSmoothingValue =
  | C.Globals
  | "auto"
  | "none"
  | "antialiased"
  | "subpixel-antialiased"

export interface TextConfig {
  fontFamily: [C.FontFamilyProperty, "ff"]
  fontSize: [C.FontSizeProperty<T.Length>, "fs"]
  fontSmoothing: [FontSmoothingValue, "fsm"]
  fontStyle: [C.FontStyleProperty, "fst"]
  fontWeight: [C.FontWeightProperty, "fw"]
  lineHeight: [C.LineHeightProperty<T.Length>, "lh"]
  letterSpacing: [C.LetterSpacingProperty<T.Length>, "ls"]
  textAlign: [C.TextAlignProperty, "ta"]
  textDecoration: [C.TextDecorationProperty, "td"]
  textTransform: [C.TextTransformProperty, "tt"]
  color: [C.ColorProperty, "tc"]
}

export type TextProps = T.ResponsiveProps<TextConfig>

export const textConfig: T.RegistryConfig<TextConfig> = {
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
