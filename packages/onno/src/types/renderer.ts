import { Index, Key, Keys } from "./primitives"
import { CSSObject } from "./css"
import { Lookup } from "./lookup"

export type Transform = (value: any) => any

export type RendererKeys = Key | Keys | null

export interface RendererConfig {
  props?: RendererKeys
  theme?: RendererKeys
  style?: RendererKeys
  transform?: Transform
  lookup?: Lookup
  index?: Index
}

export interface Renderer {
  <P>(props: P): CSSObject
  config: RendererConfig
}

export interface Renderers {
  [key: string]: Renderer
}
