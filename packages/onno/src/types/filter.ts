import { Key } from "./primitives"

// Omit

export type OmitKey<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

export type OmitProps<K extends Key> = <P>(props: P) => OmitKey<P, K>

// Pick

export type PickKey<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>

export type PickProps<K extends Key> = <P>(props: P) => PickKey<P, K>
