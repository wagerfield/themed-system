import { Properties, Pseudos } from "csstype"
import { Keys, Nil, Primitive } from "./primitives"
import { BreakpointKey } from "./breakpoints"

// Responsive

export type ResponsiveArray<V> = V[]

export type ResponsiveObject<V> = { [K in BreakpointKey]?: V }

export type ResponsiveValue<V> = V | ResponsiveArray<V> | ResponsiveObject<V>

export type ResponsiveMap<T> = {
  [K in keyof T]: ResponsiveValue<T[K]>
}

// Pseudo

export type PseudoMap<T> = { [K in Pseudos]?: T }

// CSS

export type CSSValue = Primitive | undefined

export type CSSPseudos = PseudoMap<CSSObject>

export type CSSProperties = Properties<Primitive>

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | CSSValue
}

export type CSS = CSSObject[]

export interface CSSRenderer<T extends Keys> {
  <P>(props: P): CSS
  // omit: <P, K extends keyof P>(props: P, ...keys: K[]) => Omit<P, K>
  // pick: <P, K extends keyof P>(props: P, ...keys: K[]) => Pick<P, K>
  keys: T
}

// Style

export type StylePseudos = PseudoMap<StyleObject>

export type StyleProperties = ResponsiveMap<CSSProperties>

export type StyleBreakpoints = ResponsiveObject<StyleObject>

export interface StyleObject
  extends StyleBreakpoints,
    StyleProperties,
    StylePseudos {
  [key: string]: StyleObject | ResponsiveValue<CSSValue>
}

export type Style = Nil | StyleObject | StyleObject[]
