import { Key, Primitive } from "./primitives"
import { BreakpointKey } from "./breakpoints"
import { UnionToIntersection } from "./helpers"

export type ResponsiveValue<V> = V | V[] | Partial<Record<BreakpointKey, V>>

// Credit: Titian Cernicova-Dragomir
// https://github.com/dragomirtitian
export type ResponsiveProps<T extends Record<keyof T, [Primitive, Key?]>> = {
  [K in keyof T]?: ResponsiveValue<T[K][0]>
} &
  UnionToIntersection<
    {
      [K in keyof T]: T[K] extends [any, infer A]
        ? { [P in Extract<A, string>]?: ResponsiveValue<T[K][0]> }
        : never
    }[keyof T]
  >
