import { parse } from "../src/core"

test("number values", () => {
  expect(parse(1)).toEqual({ index: 1 })
})

test("object values", () => {
  const config = {
    propsKeys: "p",
    styleKeys: "s",
    themeKeys: "t"
  }
  expect(parse(config)).toBe(config)
})

test("string values", () => {
  expect(parse("a")).toEqual({ propsKeys: "a" })
})

test("string[] values", () => {
  expect(parse(["a", "b"])).toEqual({ propsKeys: ["a", "b"] })
})

test("invalid values", () => {
  expect(parse(null as any)).toEqual({})
  expect(parse(true as any)).toEqual({})
})
