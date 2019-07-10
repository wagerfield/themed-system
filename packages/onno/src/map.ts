import { CSSKey, CSSRenderer } from "./types"
import { Configs, ConfigKey } from "./configs"
import { omit, pick } from "./filter"
import { getKeys } from "./registry"
import { css } from "./css"

export type MapKey = CSSKey | ConfigKey

export type PropsKey<K> = K | Configs[Extract<K, ConfigKey>]

// prettier-ignore
export function map<
  MK extends MapKey,
  PK extends PropsKey<MK>
>(keys: MK[]): CSSRenderer<PK> {
  const mapKeys = getKeys<PK>(keys)
  const omitKeys = omit<PK>(mapKeys)
  const pickKeys = pick<PK>(mapKeys)

  const renderer: CSSRenderer<PK> = (props) => css(pickKeys(props))

  renderer.keys = mapKeys
  renderer.omit = omitKeys
  renderer.pick = pickKeys

  return renderer
}
