import { Alias, Nil, Primitive } from "./primitives"

export type LookupArrayValue<T> = T | Alias<T>

export type LookupArray<T> = LookupArrayValue<T>[]

export interface LookupObject<T> {
  [key: string]: LookupObject<T> | LookupArray<T> | T
}

export type Lookup<T = any> = LookupArray<T> | LookupObject<T> | Nil

export type Breakpoints = Alias<Primitive>[] | Nil
