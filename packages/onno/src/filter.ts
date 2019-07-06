import { Key, OmitProps, PickProps } from "./types"

export function omitKeys<K extends Key>(keys: Key[]): OmitProps<K> {
  return <P>(props: P) => ({} as any)
}

export function pickKeys<K extends Key>(keys: Key[]): PickProps<K> {
  return <P>(props: P) => ({} as any)
}
