import { Properties, Pseudos } from "csstype"
import { Primitive, Nil } from "./primitives"
import { BreakpointKey } from "./breakpoints"

// Responsive

export type ResponsiveArray<V> = V[]

export type ResponsiveObject<V> = { [K in BreakpointKey]?: V }

export type ResponsiveValue<V> = V | ResponsiveArray<V> | ResponsiveObject<V>

export type ResponsiveMap<T> = {
  [K in keyof T]: ResponsiveValue<T[K]>
}

// CSS

export type CSSProperties = ResponsiveMap<Properties<Primitive>>

export type CSSPseudos = { [K in Pseudos]?: CSSObject }

export type CSSBreakpoints = ResponsiveObject<CSSObject>

export interface CSSObject extends CSSProperties, CSSPseudos, CSSBreakpoints {
  [key: string]: CSSObject | ResponsiveValue<Primitive | Nil>
}

export type CSS = Nil | CSSObject | CSSObject[]

// type FontSmoothingValue =
//   | C.Globals
//   | "auto"
//   | "none"
//   | "antialiased"
//   | "subpixel-antialiased"
