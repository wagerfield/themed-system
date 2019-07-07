import { Key, Flag, Props } from "./primitives"

// prettier-ignore
export type FilterKey<
  K extends Key,
  E extends Flag,
  P extends Props
> = E extends true ? Exclude<keyof P, K> : Extract<keyof P, K>

// prettier-ignore
export type FilterValue<
  K extends Key,
  E extends Flag,
  P extends Props
> = Pick<P, FilterKey<K, E, P>>

// prettier-ignore
export type FilterProps<
  K extends Key,
  E extends Flag
> = <P extends Props>(props: P) => FilterValue<K, E, P>

// prettier-ignore
export type FilterKeys<
  E extends Flag
> = <K extends Key>(keys: K[]) => FilterProps<K, E>

// Omit

export type OmitProps<K extends Key> = FilterProps<K, true>

// Pick

export type PickProps<K extends Key> = FilterProps<K, false>
