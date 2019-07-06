import { CSSKey, CSSRenderer } from "./types"
import { Configs, ConfigKey } from "./configs"
import { omitKeys, pickKeys } from "./filter"
import { getKeys } from "./registry"
import { css } from "./css"

export type MapKey = CSSKey | ConfigKey

export function map<
  MK extends MapKey,
  CK extends Extract<MK, ConfigKey>,
  AK extends Configs[CK],
  PK extends MK | AK
>(keys: MK[]): CSSRenderer<PK> {
  const mapKeys = getKeys<PK>(keys)
  const omit = omitKeys<PK>(mapKeys)
  const pick = pickKeys<PK>(mapKeys)

  const renderer: CSSRenderer<PK> = (props) => css(pick(props))

  renderer.keys = mapKeys
  renderer.omit = omit
  renderer.pick = pick

  return renderer
}
