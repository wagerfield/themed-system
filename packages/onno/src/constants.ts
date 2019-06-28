import { Breakpoints, Lookup } from "./types"

export const PX_SCALE: Lookup = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]

export const PC_SCALE: Lookup = Object.assign([], PX_SCALE, { 1: "100%" })

export const BREAKPOINTS = ["all", "xs", "sm", "md", "lg", "xl"].map(
  (alias, index) => ({ alias, value: index * 360 })
) as Breakpoints
