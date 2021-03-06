import { Func, Pred, NestedArray } from "./types"

const IGNORE = /\s|\d+\.\d+/

const NUMBER = /^-?(\d*\.)?\d+$/

export const push = Array.prototype.push

export const isArray = Array.isArray

export const isNil = (x: any): x is void => x == null

export const isUndefined = (x: any) => x === undefined

export const isType = <T>(type: string) => (x: any): x is T => typeof x === type

export const isFunction = isType<Func>("function")

export const isObject = isType("object")

export const isPlainObject = (x: any) => !!x && isObject(x) && !isArray(x)

export const isString = isType<string>("string")

const isTypeNumber = isType<number>("number")

export const isNumber = (x: any): x is number => isTypeNumber(x) && !isNaN(x)

export const isNumberLike = (x: any) =>
  isNumber(x) || (isString(x) && NUMBER.test(x))

export const isUnitless = (x: any) => isNumberLike(x) && !!+x

export const isFraction = (x: any) => isUnitless(x) && x > -1 && x < 1

export const when = (p: Pred) => (f: Func) => (x: any) => (p(x) ? f(x) : x)

export const addPc = when(isFraction)((x) => x * 100 + "%")

export const addPx = when(isUnitless)((x) => x + "px")

export const addRem = when(isUnitless)((x) => x + "rem")

export const addPcOrPx = (x: any) => addPx(addPc(x))

export const mq = (x: any) => `@media(min-width: ${addPx(x)})`

export const toArray = <T>(args: T[]) => (isArray(args[0]) ? args[0] : args)

export const toPath = (x: any) =>
  isString(x) && !IGNORE.test(x) ? x.split(".") : [x]

export function get(path?: any, lookup?: any) {
  if (isNil(path) || isNil(lookup)) return undefined
  if ((isArray(path) ? path[0] : path) === ".") return lookup
  const keys = isArray(path) ? path.concat() : toPath(path)
  const head = keys[0]
  const isKey = isString(head)
  const invert = (isKey && head.indexOf("-") === 0) || head < 0
  if (invert) keys[0] = isKey ? head.substring(1) : Math.abs(head)
  const value = keys.reduce((v, k) => {
    let r = v && v[k]
    if (r && r.alias) r = r.value
    else if (isArray(v)) {
      const a = v.find((o) => o && o.alias === k)
      if (a) r = a.value
    }
    return r
  }, lookup)
  return isNumber(value)
    ? (invert ? -1 : 1) * value
    : isString(value)
    ? (invert ? "-" : "") + value
    : value
}

export function resolve(paths?: any[], lookup?: any) {
  if (isNil(lookup) || !isArray(paths)) return undefined
  return paths.reduceRight((v, p) => {
    const r = get(p, lookup)
    return isUndefined(r) ? v : r
  }, undefined)
}

export function merge<T>(array: NestedArray<T>, initial: T = {} as T): T {
  return array.reduce<T>((acc, val) => {
    return isArray(val) ? merge(val, initial) : Object.assign(acc, val)
  }, initial)
}
