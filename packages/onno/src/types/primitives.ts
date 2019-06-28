export type Length = number

export type Nil = null | undefined

export type Key = string

export type Keys = Key[]

export type Index = number

export type Primitive = number | string

export type Func = (...args: any[]) => any

export type Pred = (...args: any[]) => boolean

export interface Alias<V, A extends Key = Key> {
  alias: A
  value: V
}
