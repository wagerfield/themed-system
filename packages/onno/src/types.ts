// prettier-ignore
// A | B | C > A & B & C
// https://stackoverflow.com/questions/50374908
export type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends
    ((k: infer I) => void) ? I : never

// Primitives

export type Length = number

export type Nil = null | undefined

export type Key = string

export type Keys = Key[]

export type Index = number

export type Primitive = number | string

export interface Alias<T> {
  alias: Key
  value: T
}

// Lookup

export type LookupArrayValue<T> = T | Alias<T>

export type LookupArray<T> = LookupArrayValue<T>[]

export interface LookupObject<T> {
  [key: string]: LookupObject<T> | LookupArray<T> | T
}

export type Lookup<T = any> = LookupArray<T> | LookupObject<T> | Nil

// Breakpoints

export type Breakpoints = Alias<Primitive>[] | Nil

// Theme

export interface Theme {
  [key: string]: Lookup
  // Breakpoints
  breakpoints?: Breakpoints
  // Animation
  animations?: Lookup
  transitions?: Lookup
  // Border
  borders?: Lookup
  borderRadii?: Lookup
  borderStyles?: Lookup
  borderWidths?: Lookup
  // Color
  colors?: Lookup
  // Display
  opacities?: Lookup
  // Layout
  sizes?: Lookup
  widths?: Lookup
  minWidths?: Lookup
  maxWidths?: Lookup
  heights?: Lookup
  minHeights?: Lookup
  maxHeights?: Lookup
  zIndices?: Lookup
  // Outline
  outlines?: Lookup
  outlineOffsets?: Lookup
  outlineStyles?: Lookup
  outlineWidths?: Lookup
  // Shadow
  boxShadows?: Lookup
  textShadows?: Lookup
  // Space
  spaces?: Lookup
  // Text
  fontSizes?: Lookup
  fontFamilies?: Lookup
  fontWeights?: Lookup
  lineHeights?: Lookup
  letterSpacings?: Lookup
  // Variants
  textStyles?: Lookup
  colorStyles?: Lookup
  inputStyles?: Lookup
  buttonStyles?: Lookup
  globalStyles?: Lookup
  // Components
  components?: Lookup
}

// Responsive Props

export type ResponsiveValue<V> = V | V[] | { [key: string]: V }

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

// Renderer

export type Transform = (value: any) => any

export interface RendererConfig {
  propsKeys?: Key | Keys
  styleKeys?: Key | Keys
  themeKeys?: Key | Keys
  transform?: Transform
  defaults?: Lookup
  index?: Index
}

export interface Renderer {
  <P>(props: P): any
  filter: <P>(props: P, ...keys: Keys) => Partial<P>
  config: RendererConfig
}

export interface Renderers {
  [key: string]: Renderer
}

// Registry

export type RegistryConfigValue = Index | Key | Keys | RendererConfig

export type RegistryConfig<T = any> = {
  [K in keyof T]: RegistryConfigValue
}

export interface Registry {
  [key: string]: Renderer
}
