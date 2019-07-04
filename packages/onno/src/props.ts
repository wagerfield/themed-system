import { CSSRenderer } from "./types"
import { ConfigKeys } from "./configs"

export function props<K extends ConfigKeys>(keys: K): CSSRenderer<K> {
  const renderer: CSSRenderer<K> = <P>(prop: P) => []
  renderer.keys = keys
  return renderer
}
