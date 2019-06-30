import * as O from "../src"

test("concat", () => {
  expect(O.concat()).toEqual([])
  expect(O.concat(1)).toEqual([1])
  expect(O.concat(1, 2)).toEqual([1, 2])
  expect(O.concat(1, [2, 3])).toEqual([1, 2, 3])
  expect(O.concat([1, 2], 3)).toEqual([1, 2, 3])
  expect(O.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
})

test("not", () => {
  const equal = (a: any, b: any) => a === b
  expect(equal("a", "a")).toBe(true)
  expect(equal("a", "b")).toBe(false)

  const notEqual = O.not(equal)
  expect(notEqual).toEqual(expect.any(Function))
  expect(notEqual("a", "a")).toBe(false)
  expect(notEqual("a", "b")).toBe(true)
})

test("and", () => {
  const isGt10 = (value: number) => value > 10
  const isLt20 = (value: number) => value < 20
  const predicate = O.and(isGt10, isLt20)
  expect(predicate).toEqual(expect.any(Function))
  expect(predicate(11)).toBe(true)
  expect(predicate(19)).toBe(true)
  expect(predicate(10)).toBe(false)
  expect(predicate(20)).toBe(false)
})

test("isType", () => {
  const isBoolean = O.isType<boolean>("boolean")
  expect(isBoolean).toEqual(expect.any(Function))
  expect(isBoolean).toHaveLength(1)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(undefined)).toBe(false)
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean("0")).toBe(false)
  expect(isBoolean(1)).toBe(false)
})

test("isNil", () => {
  expect(O.isNil(undefined)).toBe(true)
  expect(O.isNil(null)).toBe(true)
  expect(O.isNil({})).toBe(false)
  expect(O.isNil([])).toBe(false)
  expect(O.isNil("")).toBe(false)
  expect(O.isNil(0)).toBe(false)
})

test("isFunction", () => {
  function regular() {
    return null
  }
  const arrow = () => {
    return null
  }
  expect(O.isFunction(regular)).toBe(true)
  expect(O.isFunction(arrow)).toBe(true)
  expect(O.isFunction({})).toBe(false)
  expect(O.isFunction([])).toBe(false)
  expect(O.isFunction(0)).toBe(false)
  expect(O.isFunction("0")).toBe(false)
  expect(O.isFunction(null)).toBe(false)
  expect(O.isFunction(undefined)).toBe(false)
})

test("isString", () => {
  expect(O.isString("")).toBe(true)
  expect(O.isString("0")).toBe(true)
  expect(O.isString("foo")).toBe(true)
  expect(O.isString(undefined)).toBe(false)
  expect(O.isString(null)).toBe(false)
  expect(O.isString({})).toBe(false)
  expect(O.isString([])).toBe(false)
  expect(O.isString(0)).toBe(false)
})

test("isObject", () => {
  expect(O.isObject({})).toBe(true)
  expect(O.isObject([])).toBe(true)
  expect(O.isObject(0)).toBe(false)
  expect(O.isObject("0")).toBe(false)
  expect(O.isObject(null)).toBe(false)
  expect(O.isObject(undefined)).toBe(false)
})

test("isPlainObject", () => {
  expect(O.isPlainObject({})).toBe(true)
  expect(O.isPlainObject([])).toBe(false)
  expect(O.isPlainObject(null)).toBe(false)
  expect(O.isPlainObject(undefined)).toBe(false)
  expect(O.isPlainObject("0")).toBe(false)
  expect(O.isPlainObject(0)).toBe(false)
})

test("isNumber", () => {
  expect(O.isNumber(0)).toBe(true)
  expect(O.isNumber(1)).toBe(true)
  expect(O.isNumber(-1)).toBe(true)
  expect(O.isNumber(NaN)).toBe(false)
  expect(O.isNumber(undefined)).toBe(false)
  expect(O.isNumber(null)).toBe(false)
  expect(O.isNumber({})).toBe(false)
  expect(O.isNumber([])).toBe(false)
  expect(O.isNumber("0")).toBe(false)
})

test("isNumberLike", () => {
  // Truthy
  expect(O.isNumberLike(0)).toBe(true)
  expect(O.isNumberLike(0.1)).toBe(true)
  expect(O.isNumberLike(.1)).toBe(true) // prettier-ignore
  expect(O.isNumberLike(1)).toBe(true)
  expect(O.isNumberLike(1.1)).toBe(true)
  expect(O.isNumberLike(11.1)).toBe(true)

  expect(O.isNumberLike(-0)).toBe(true)
  expect(O.isNumberLike(-0.1)).toBe(true)
  expect(O.isNumberLike(-.1)).toBe(true) // prettier-ignore
  expect(O.isNumberLike(-1)).toBe(true)
  expect(O.isNumberLike(-1.1)).toBe(true)
  expect(O.isNumberLike(-11.1)).toBe(true)

  expect(O.isNumberLike("0")).toBe(true)
  expect(O.isNumberLike("0.1")).toBe(true)
  expect(O.isNumberLike(".1")).toBe(true)
  expect(O.isNumberLike("1")).toBe(true)
  expect(O.isNumberLike("1.1")).toBe(true)
  expect(O.isNumberLike("11.1")).toBe(true)

  expect(O.isNumberLike("-0")).toBe(true)
  expect(O.isNumberLike("-0.1")).toBe(true)
  expect(O.isNumberLike("-.1")).toBe(true)
  expect(O.isNumberLike("-1")).toBe(true)
  expect(O.isNumberLike("-1.1")).toBe(true)
  expect(O.isNumberLike("-11.1")).toBe(true)

  // Falsey
  expect(O.isNumberLike(NaN)).toBe(false)
  expect(O.isNumberLike(null)).toBe(false)
  expect(O.isNumberLike(undefined)).toBe(false)

  expect(O.isNumberLike("")).toBe(false)
  expect(O.isNumberLike("-")).toBe(false)
  expect(O.isNumberLike("foo")).toBe(false)

  expect(O.isNumberLike({})).toBe(false)
  expect(O.isNumberLike([])).toBe(false)
})

test("isUnitless", () => {
  // Truthy
  expect(O.isUnitless("0.1")).toBe(true)
  expect(O.isUnitless(".1")).toBe(true)
  expect(O.isUnitless("1")).toBe(true)
  expect(O.isUnitless("1.1")).toBe(true)
  expect(O.isUnitless("11.1")).toBe(true)

  expect(O.isUnitless("-0.1")).toBe(true)
  expect(O.isUnitless("-.1")).toBe(true)
  expect(O.isUnitless("-1")).toBe(true)
  expect(O.isUnitless("-1.1")).toBe(true)
  expect(O.isUnitless("-11.1")).toBe(true)

  // Falsey
  expect(O.isUnitless("0")).toBe(false)
  expect(O.isUnitless("-0")).toBe(false)

  expect(O.isUnitless("0px")).toBe(false)
  expect(O.isUnitless("-0px")).toBe(false)

  expect(O.isUnitless("1px")).toBe(false)
  expect(O.isUnitless("-1px")).toBe(false)
})

test("isFraction", () => {
  expect(O.isFraction(0.1)).toBe(true)
  expect(O.isFraction(3 / 4)).toBe(true)
  expect(O.isFraction(0)).toBe(false)
  expect(O.isFraction(1)).toBe(false)
  expect(O.isFraction(null)).toBe(false)
  expect(O.isFraction("foo")).toBe(false)
})

test("when", () => {
  const add1 = (n: number) => n + 1
  const whenFraction = O.when(O.isFraction)
  const whenUnitless = O.when(O.isUnitless)

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
  expect(O.addPx(0)).toBe(0)
  expect(O.addPx(1)).toBe("1px")
  expect(O.addPx(-2)).toBe("-2px")
  expect(O.addPx("0")).toBe("0")
  expect(O.addPx("1")).toBe("1px")
  expect(O.addPx("-2")).toBe("-2px")
  expect(O.addPx("2em")).toBe("2em")
})

test("addPc", () => {
  expect(O.addPc(0)).toBe(0)
  expect(O.addPc(1)).toBe(1)
  expect(O.addPc(0.15)).toBe("15%")
  expect(O.addPc(-0.25)).toBe("-25%")
  expect(O.addPc(3 / 4)).toBe("75%")
  expect(O.addPc("0")).toBe("0")
  expect(O.addPc("0.5")).toBe("50%")
  expect(O.addPc("-0.05")).toBe("-5%")
  expect(O.addPc("2em")).toBe("2em")
})

test("addRem", () => {
  expect(O.addRem(0)).toBe(0)
  expect(O.addRem(1.5)).toBe("1.5rem")
  expect(O.addRem(-2)).toBe("-2rem")
  expect(O.addRem("2px")).toBe("2px")
})

test("addPcOrPx", () => {
  expect(O.addPcOrPx(0)).toBe(0)

  expect(O.addPcOrPx(0.1)).toBe("10%")
  expect(O.addPcOrPx(-0.1)).toBe("-10%")
  expect(O.addPcOrPx(0.5)).toBe("50%")
  expect(O.addPcOrPx(-0.5)).toBe("-50%")
  expect(O.addPcOrPx(3 / 4)).toBe("75%")
  expect(O.addPcOrPx(-3 / 4)).toBe("-75%")

  expect(O.addPcOrPx(1)).toBe("1px")
  expect(O.addPcOrPx(2)).toBe("2px")

  expect(O.addPcOrPx(-1)).toBe("-1px")
  expect(O.addPcOrPx(-2)).toBe("-2px")

  expect(O.addPcOrPx("1em")).toBe("1em")
  expect(O.addPcOrPx("2vw")).toBe("2vw")
})

test("mq", () => {
  expect(O.mq(320)).toBe("@media(min-width: 320px)")
  expect(O.mq("20rem")).toBe("@media(min-width: 20rem)")
})
