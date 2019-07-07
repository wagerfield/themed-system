import * as U from "../src/utils"
import { AnyFunction } from "./test-utils"

test("concat", () => {
  expect(U.concat()).toEqual([])
  expect(U.concat(1)).toEqual([1])
  expect(U.concat(1, 2)).toEqual([1, 2])
  expect(U.concat(1, [2, 3])).toEqual([1, 2, 3])
  expect(U.concat([1, 2], 3)).toEqual([1, 2, 3])
  expect(U.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test("not", () => {
  const equal = (a: any, b: any) => a === b
  expect(equal("a", "a")).toBe(true)
  expect(equal("a", "b")).toBe(false)

  const notEqual = U.not(equal)
  expect(notEqual).toEqual(AnyFunction)
  expect(notEqual("a", "a")).toBe(false)
  expect(notEqual("a", "b")).toBe(true)
})

test("and", () => {
  const isGt10 = (value: number) => value > 10
  const isLt20 = (value: number) => value < 20
  const predicate = U.and(isGt10, isLt20)
  expect(predicate).toEqual(AnyFunction)
  expect(predicate(11)).toBe(true)
  expect(predicate(19)).toBe(true)
  expect(predicate(10)).toBe(false)
  expect(predicate(20)).toBe(false)
})

test("isType", () => {
  const isBoolean = U.isType<boolean>("boolean")
  expect(isBoolean).toEqual(AnyFunction)
  expect(isBoolean).toHaveLength(1)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(undefined)).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean("0")).toBe(false)
  expect(isBoolean(1)).toBe(false)
})

test("isNil", () => {
  expect(U.isNil(undefined)).toBe(true)
  expect(U.isNil(null)).toBe(true)
  expect(U.isNil({})).toBe(false)
  expect(U.isNil([])).toBe(false)
  expect(U.isNil("")).toBe(false)
  expect(U.isNil(0)).toBe(false)
})

test("isFunction", () => {
  function regular() {
    return null
  }
  const arrow = () => {
    return null
  }
  expect(U.isFunction(regular)).toBe(true)
  expect(U.isFunction(arrow)).toBe(true)
  expect(U.isFunction({})).toBe(false)
  expect(U.isFunction([])).toBe(false)
  expect(U.isFunction(0)).toBe(false)
  expect(U.isFunction("0")).toBe(false)
  expect(U.isFunction(null)).toBe(false)
  expect(U.isFunction(undefined)).toBe(false)
})

test("isString", () => {
  expect(U.isString("")).toBe(true)
  expect(U.isString("0")).toBe(true)
  expect(U.isString("foo")).toBe(true)
  expect(U.isString(undefined)).toBe(false)
  expect(U.isString(null)).toBe(false)
  expect(U.isString({})).toBe(false)
  expect(U.isString([])).toBe(false)
  expect(U.isString(0)).toBe(false)
})

test("isObject", () => {
  expect(U.isObject({})).toBe(true)
  expect(U.isObject([])).toBe(true)
  expect(U.isObject(0)).toBe(false)
  expect(U.isObject("0")).toBe(false)
  expect(U.isObject(null)).toBe(false)
  expect(U.isObject(undefined)).toBe(false)
})

test("isPlainObject", () => {
  expect(U.isPlainObject({})).toBe(true)
  expect(U.isPlainObject([])).toBe(false)
  expect(U.isPlainObject(null)).toBe(false)
  expect(U.isPlainObject(undefined)).toBe(false)
  expect(U.isPlainObject("0")).toBe(false)
  expect(U.isPlainObject(0)).toBe(false)
})

test("isNumber", () => {
  expect(U.isNumber(0)).toBe(true)
  expect(U.isNumber(1)).toBe(true)
  expect(U.isNumber(-1)).toBe(true)
  expect(U.isNumber(NaN)).toBe(false)
  expect(U.isNumber(undefined)).toBe(false)
  expect(U.isNumber(null)).toBe(false)
  expect(U.isNumber({})).toBe(false)
  expect(U.isNumber([])).toBe(false)
  expect(U.isNumber("0")).toBe(false)
})

test("isNumberLike", () => {
  // Truthy
  expect(U.isNumberLike(0)).toBe(true)
  expect(U.isNumberLike(0.1)).toBe(true)
  expect(U.isNumberLike(.1)).toBe(true) // prettier-ignore
  expect(U.isNumberLike(1)).toBe(true)
  expect(U.isNumberLike(1.1)).toBe(true)
  expect(U.isNumberLike(11.1)).toBe(true)

  expect(U.isNumberLike(-0)).toBe(true)
  expect(U.isNumberLike(-0.1)).toBe(true)
  expect(U.isNumberLike(-.1)).toBe(true) // prettier-ignore
  expect(U.isNumberLike(-1)).toBe(true)
  expect(U.isNumberLike(-1.1)).toBe(true)
  expect(U.isNumberLike(-11.1)).toBe(true)

  expect(U.isNumberLike("0")).toBe(true)
  expect(U.isNumberLike("0.1")).toBe(true)
  expect(U.isNumberLike(".1")).toBe(true)
  expect(U.isNumberLike("1")).toBe(true)
  expect(U.isNumberLike("1.1")).toBe(true)
  expect(U.isNumberLike("11.1")).toBe(true)

  expect(U.isNumberLike("-0")).toBe(true)
  expect(U.isNumberLike("-0.1")).toBe(true)
  expect(U.isNumberLike("-.1")).toBe(true)
  expect(U.isNumberLike("-1")).toBe(true)
  expect(U.isNumberLike("-1.1")).toBe(true)
  expect(U.isNumberLike("-11.1")).toBe(true)

  // Falsey
  expect(U.isNumberLike(NaN)).toBe(false)
  expect(U.isNumberLike(null)).toBe(false)
  expect(U.isNumberLike(undefined)).toBe(false)

  expect(U.isNumberLike("")).toBe(false)
  expect(U.isNumberLike("-")).toBe(false)
  expect(U.isNumberLike("foo")).toBe(false)

  expect(U.isNumberLike({})).toBe(false)
  expect(U.isNumberLike([])).toBe(false)
})

test("isUnitless", () => {
  // Truthy
  expect(U.isUnitless("0.1")).toBe(true)
  expect(U.isUnitless(".1")).toBe(true)
  expect(U.isUnitless("1")).toBe(true)
  expect(U.isUnitless("1.1")).toBe(true)
  expect(U.isUnitless("11.1")).toBe(true)

  expect(U.isUnitless("-0.1")).toBe(true)
  expect(U.isUnitless("-.1")).toBe(true)
  expect(U.isUnitless("-1")).toBe(true)
  expect(U.isUnitless("-1.1")).toBe(true)
  expect(U.isUnitless("-11.1")).toBe(true)

  // Falsey
  expect(U.isUnitless("0")).toBe(false)
  expect(U.isUnitless("-0")).toBe(false)

  expect(U.isUnitless("0px")).toBe(false)
  expect(U.isUnitless("-0px")).toBe(false)

  expect(U.isUnitless("1px")).toBe(false)
  expect(U.isUnitless("-1px")).toBe(false)
})

test("isFraction", () => {
  expect(U.isFraction(0.1)).toBe(true)
  expect(U.isFraction(3 / 4)).toBe(true)
  expect(U.isFraction(0)).toBe(false)
  expect(U.isFraction(1)).toBe(false)
  expect(U.isFraction(null)).toBe(false)
  expect(U.isFraction("foo")).toBe(false)
})

test("when", () => {
  const add1 = (n: number) => n + 1
  const whenFraction = U.when(U.isFraction)
  const whenUnitless = U.when(U.isUnitless)

  expect(whenFraction(add1)(0)).toBe(0)
  expect(whenFraction(add1)(1)).toBe(1)
  expect(whenFraction(add1)(0.2)).toBe(1.2)
  expect(whenFraction(add1)(3 / 4)).toBe(1.75)
  expect(whenFraction(add1)("2px")).toBe("2px")

  expect(whenUnitless(add1)(0)).toBe(0)
  expect(whenUnitless(add1)(1)).toBe(2)
  expect(whenUnitless(add1)(0.2)).toBe(1.2)
  expect(whenUnitless(add1)(3 / 4)).toBe(1.75)
  expect(whenUnitless(add1)("2px")).toBe("2px")
})

test("addPx", () => {
  expect(U.addPx(0)).toBe(0)
  expect(U.addPx(1)).toBe("1px")
  expect(U.addPx(-2)).toBe("-2px")
  expect(U.addPx("0")).toBe("0")
  expect(U.addPx("1")).toBe("1px")
  expect(U.addPx("-2")).toBe("-2px")
  expect(U.addPx("2em")).toBe("2em")
})

test("addPc", () => {
  expect(U.addPc(0)).toBe(0)
  expect(U.addPc(1)).toBe(1)
  expect(U.addPc(0.15)).toBe("15%")
  expect(U.addPc(-0.25)).toBe("-25%")
  expect(U.addPc(3 / 4)).toBe("75%")
  expect(U.addPc("0")).toBe("0")
  expect(U.addPc("0.5")).toBe("50%")
  expect(U.addPc("-0.05")).toBe("-5%")
  expect(U.addPc("2em")).toBe("2em")
})

test("addRem", () => {
  expect(U.addRem(0)).toBe(0)
  expect(U.addRem(1.5)).toBe("1.5rem")
  expect(U.addRem(-2)).toBe("-2rem")
  expect(U.addRem("2px")).toBe("2px")
})

test("addPcOrPx", () => {
  expect(U.addPcOrPx(0)).toBe(0)

  expect(U.addPcOrPx(0.1)).toBe("10%")
  expect(U.addPcOrPx(-0.1)).toBe("-10%")
  expect(U.addPcOrPx(0.5)).toBe("50%")
  expect(U.addPcOrPx(-0.5)).toBe("-50%")
  expect(U.addPcOrPx(3 / 4)).toBe("75%")
  expect(U.addPcOrPx(-3 / 4)).toBe("-75%")

  expect(U.addPcOrPx(1)).toBe("1px")
  expect(U.addPcOrPx(2)).toBe("2px")

  expect(U.addPcOrPx(-1)).toBe("-1px")
  expect(U.addPcOrPx(-2)).toBe("-2px")

  expect(U.addPcOrPx("1em")).toBe("1em")
  expect(U.addPcOrPx("2vw")).toBe("2vw")
})

test("mq", () => {
  expect(U.mq(320)).toBe("@media(min-width: 320px)")
  expect(U.mq("20rem")).toBe("@media(min-width: 20rem)")
})

test("uniq", () => {
  expect(U.uniq([1, 2, 3])).toEqual([1, 2, 3])
  expect(U.uniq([2, 2, 3])).toEqual([2, 3])
  expect(U.uniq([3, 3, 3])).toEqual([3])
})
