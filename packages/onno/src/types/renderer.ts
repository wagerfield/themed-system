import { Index, Key, Keys } from "./primitives"
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
  <P>(props: P): any
  filter: <P>(props: P, ...exclude: Keys) => Partial<P>
  config: RendererConfig
}

export interface Renderers {
  [key: string]: Renderer
}
