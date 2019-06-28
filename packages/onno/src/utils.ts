import { Func } from "./types"

export const assign = Object.assign

export const isType = <T>(type: string) => <U extends T = T>(
  value: any
): value is U => typeof value === type

export const isArray = Array.isArray

export const isFunction = isType<Func>("function")

export const isNumber = isType<number>("number")

export const isObject = (value: any): value is object =>
  !!value && typeof value === "object"

export const isString = isType<string>("string")

export const addPx = (value: any) => value

export const addPc = (value: any) => value

export const addPcOrPx = (value: any) => value
