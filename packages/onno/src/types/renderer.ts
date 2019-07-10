import { Index, Key, Keys, Props } from "./primitives"
import { CSSObject } from "./css"

export type Transform = (value: any) => any

export type RendererKeys = Key | Keys | null

export interface RendererConfig {
  transform?: Transform
  props?: RendererKeys
  style?: RendererKeys
  theme?: RendererKeys
  index?: Index
}

export interface Renderer {
  <P extends Props>(props: P): CSSObject
  config: RendererConfig
}

export interface Renderers {
  [key: string]: Renderer
}
