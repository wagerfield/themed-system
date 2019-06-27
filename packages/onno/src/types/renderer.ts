import { Index, Key, Keys } from "./primitives"
import { Lookup } from "./lookup"

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
