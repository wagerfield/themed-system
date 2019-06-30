import { Properties, Pseudos } from "csstype"
import { BreakpointKey } from "./breakpoints"
import { Primitive } from "./primitives"

// Responsive

export type ResponsiveArray<V> = V[]

export type ResponsiveObject<V> = Partial<Record<BreakpointKey, V>>

export type ResponsiveValue<V> = V | ResponsiveArray<V> | ResponsiveObject<V>

export type ResponsiveMap<T> = {
  [K in keyof T]: ResponsiveValue<T[K]>
}

// CSS

export interface CSSProperties extends Properties<Primitive> {}

export type CSSPseudos<T> = { [K in Pseudos]?: T }

export type CSSObject<T> = T & CSSPseudos<T>

export type CSSKey = keyof CSSProperties

export type CSSKeys = CSSKey[]

export type CSS = CSSObject<ResponsiveMap<CSSProperties>>

// type FontSmoothingValue =
//   | C.Globals
//   | "auto"
//   | "none"
//   | "antialiased"
//   | "subpixel-antialiased"
