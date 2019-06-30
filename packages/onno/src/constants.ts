import { Breakpoints, BreakpointKey, Lookup } from "./types"

export const PX_SCALE: Lookup = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]

export const PC_SCALE: Lookup = Object.assign([], PX_SCALE, { 1: "100%" })

export const BREAKPOINT_KEYS: BreakpointKey[] = [
  "all",
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
]

export const BREAKPOINTS: Breakpoints = BREAKPOINT_KEYS.map((alias, index) => ({
  alias,
  value: index * 360
}))
