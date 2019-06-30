import { Alias, Primitive } from "./primitives"

export type BreakpointKey = "all" | "xs" | "sm" | "md" | "lg" | "xl"

export type BreakpointAlias = Alias<Primitive, BreakpointKey>

export type Breakpoints = BreakpointAlias[]
