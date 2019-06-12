import { PropertiesFallback, Pseudos } from "csstype"

// Primitives

export type Length = number

export type Nil = null | undefined

export type Primitive = number | string

export type Key = string

export type Keys = Key[]

export interface NestedArray<T> extends Array<T | NestedArray<T>> {}

// Functions

export type Func = (...args: any[]) => any

export type Pred = (...args: any[]) => boolean

// CSS

export type CSSProperties = PropertiesFallback<Primitive>

export type CSSPseudos<P> = { [K in Pseudos]?: CSSProperties & P }

export type CSSStyleObject<P> = CSSProperties & CSSPseudos<P> & P

// Responsive

export type ResponsivePropArray<T> = T[]

export interface ResponsivePropObject<T> {
  [key: string]: T
}

export type ResponsiveProp<T> = ResponsivePropArray<T> | ResponsivePropObject<T>

export type Prop<T> = T | ResponsiveProp<T> | Nil

export interface Alias<T = Primitive> {
  alias: Key
  value: T
}

// Theme

export type ThemeArrayValue<T> = Alias<T> | T

export type ThemeArray<T = Primitive> = ThemeArrayValue<T>[]

export interface ThemeObject<T = Primitive> {
  [key: string]: ThemeObject<T> | ThemeArray<T> | T
}

export type ThemeValue<T = Primitive> = ThemeArray<T> | ThemeObject<T> | Nil

export type Breakpoints<T = Primitive> = ThemeArray<T> | Nil

export interface Theme<T = Primitive> {
  [key: string]: ThemeValue<T>
  // Breakpoints
  breakpoints?: Breakpoints<T>
  // Animation
  animations?: ThemeValue<T>
  transitions?: ThemeValue<T>
  // Border
  borders?: ThemeValue<T>
  borderRadii?: ThemeValue<T>
  borderStyles?: ThemeValue<T>
  borderWidths?: ThemeValue<T>
  // Color
  colors?: ThemeValue<T>
  // Display
  opacities?: ThemeValue<T>
  // Layout
  sizes?: ThemeValue<T>
  widths?: ThemeValue<T>
  minWidths?: ThemeValue<T>
  maxWidths?: ThemeValue<T>
  heights?: ThemeValue<T>
  minHeights?: ThemeValue<T>
  maxHeights?: ThemeValue<T>
  zIndices?: ThemeValue<T>
  // Outline
  outlines?: ThemeValue<T>
  outlineOffsets?: ThemeValue<T>
  outlineStyles?: ThemeValue<T>
  outlineWidths?: ThemeValue<T>
  // Shadow
  boxShadows?: ThemeValue<T>
  textShadows?: ThemeValue<T>
  // Space
  spaces?: ThemeValue<T>
  // Text
  fontSizes?: ThemeValue<T>
  fontFamilies?: ThemeValue<T>
  fontWeights?: ThemeValue<T>
  lineHeights?: ThemeValue<T>
  letterSpacings?: ThemeValue<T>
  // Variants
  textStyles?: ThemeValue<T>
  colorStyles?: ThemeValue<T>
  buttonStyles?: ThemeValue<T>
  globalStyles?: ThemeValue<T>
  // Components
  components?: ThemeValue<T>
}

export interface ThemeProps {
  theme?: Theme
}

export interface Props extends ThemeProps {
  [key: string]: any
}

// Style

export type StyleValue = number | string | string[] | Nil

export interface Style {
  [key: string]: StyleValue
}

export interface StyleObject<S extends Style> {
  [key: string]: StyleObject<S> | StyleValue
}

export type StyleArray<S extends Style> = StyleObject<S>[]

// Options

export type StyleOptionsKeys = "propsKeys" | "styleKeys" | "themeKeys"

export interface StyleOptions {
  propsKeys: Keys
  styleKeys?: Keys | null
  themeKeys?: Keys
  transform?: ValueTransformFunction
  renderers?: AnyRenderFunction[]
  defaults?: ThemeValue
}

export interface ComposeOptions {
  renderers: AnyRenderFunction[]
  name: string
}

export interface ComposedRenderOptions {
  propsKeys: Keys
  styleKeys: Keys
  themeKeys: Keys
  renderers: AnyRenderFunction[]
}

export type FilterInitial<P> = (props: P) => Partial<P>

export type FilterReducer<P> = (
  acc: Partial<P>,
  key: keyof P,
  props: P
) => Partial<P>

export interface FilterOptions<P> {
  propsKeys?: Keys
  renderers?: AnyRenderFunction[]
  initial: FilterInitial<P>
  reducer: FilterReducer<P>
}

export type OmitOptions<P> = Omit<FilterOptions<P>, "initial" | "reducer">

export type PickOptions<P> = Omit<FilterOptions<P>, "initial" | "reducer">

export type VariantOptions = Omit<StyleOptions, "styleKeys">

export type InterpolateOptions = ComposeOptions

// Filter Functions

export type FilterFunction<P extends ThemeProps> = (value: P) => Partial<P>

export type OmitFunction<P> = FilterFunction<P>

export type PickFunction<P> = FilterFunction<P>

// Transform Functions

export type ValueTransformFunction = (value: any) => any

export interface StyleTransformFunction<P extends ThemeProps, S extends Style> {
  (style?: StyleObject<S>, theme?: Theme): StyleObject<S> | null
  renderer: ComposedRenderFunction<P, S>
  options: InterpolateOptions
}

// Render Functions

export type RenderFunctionType = "style" | "compose" | "variant"

export interface RenderFunction<P extends ThemeProps, S extends Style> {
  (props: P): StyleArray<S> | null
  type: RenderFunctionType
  options: StyleOptions
  transformer?: StyleTransformFunction<P, S>
}

export interface ComposedRenderFunction<P extends ThemeProps, S extends Style>
  extends RenderFunction<P, S> {
  options: ComposedRenderOptions
}

export type AnyRenderFunction = RenderFunction<any, any>
