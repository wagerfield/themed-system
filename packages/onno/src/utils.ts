import { Func, Pred } from "./types"

const NUMBER = /^-?(\d*\.)?\d+$/

export const keys = Object.keys

export const assign = Object.assign

export const concat = (...args: any[]) => [].concat(...args)

export const not = (fn: Func) => (...args: any[]) => !fn(...args)

export const and = <T>(a: Func, b: Func) => <U extends T = T>(x: any): x is U =>
  a(x) && b(x)

export const isType = <T>(type: string) => <U extends T = T>(x: any): x is U =>
  typeof x === type

export const isNil = (x: any): x is void => x == null

export const isArray = Array.isArray

export const isFunction = isType<Func>("function")

export const isString = isType<string>("string")

export const isObject = and<object>(not(isNil), isType<object>("object"))

export const isNumber = and<number>(not(isNaN), isType<number>("number"))

export const isNumberLike = (x: any): x is number =>
  isNumber(x) || (isString(x) && NUMBER.test(x))

export const isUnitless = (x: any) => isNumberLike(x) && !!+x

export const isFraction = (x: any) => isUnitless(x) && x > -1 && x < 1

export const when = (p: Pred) => (f: Func) => (x: any) => (p(x) ? f(x) : x)

export const addPc = when(isFraction)((x) => x * 100 + "%")

export const addPx = when(isUnitless)((x) => x + "px")

export const addRem = when(isUnitless)((x) => x + "rem")

export const addPcOrPx = (x: any) => addPx(addPc(x))

export const mq = (x: any) => `@media(min-width: ${addPx(x)})`
