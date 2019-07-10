import { BreakpointKey, Theme } from "./types"

export const THEME: Theme = {
  breakpoints: (["xs", "sm", "md", "lg", "xl"] as BreakpointKey[]).map(
    (alias, index) => ({ alias, value: index * 360 })
  ),
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 56, 64],
  sizes: [0, "100%", 4, 8, 16, 32, 64, 128, 256, 512],
  spaces: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]
}
