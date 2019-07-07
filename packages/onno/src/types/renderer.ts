import { Index, Key, Keys, Props } from "./primitives"
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
  <P extends Props>(props: P): CSSObject
  config: RendererConfig
}

export interface Renderers {
  [key: string]: Renderer
}
