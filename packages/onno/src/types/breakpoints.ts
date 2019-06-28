import { Alias, Primitive } from "./primitives"

export type BreakpointKey = "all" | "xs" | "sm" | "md" | "lg" | "xl"

export type BreakpointAlias<A extends BreakpointKey> = Alias<Primitive, A>

export interface Breakpoints extends Array<BreakpointAlias<BreakpointKey>> {
  0: BreakpointAlias<"all">
  1: BreakpointAlias<"xs">
  2: BreakpointAlias<"sm">
  3: BreakpointAlias<"md">
  4: BreakpointAlias<"lg">
  5: BreakpointAlias<"xl">
}
