import { Alias, Primitive } from "./primitives"

export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl"

export type BreakpointValue = Primitive

export type BreakpointAlias = Alias<BreakpointValue, BreakpointKey>

export type BreakpointMap = Record<BreakpointKey, BreakpointValue>

export type Breakpoints = BreakpointAlias[]
