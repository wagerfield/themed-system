import { parse } from "../src/registry"

test("array values", () => {
  expect(parse(["a", "b"])).toEqual(["a", "b"])
})

test("number values", () => {
  expect(parse(1)).toEqual({ index: 1 })
})

test("string values", () => {
  expect(parse("a")).toEqual({ propsKeys: "a" })
})

test("object values", () => {
  const config = {
    propsKeys: "p",
    styleKeys: "s",
    themeKeys: "t"
  }
  expect(parse(config)).toBe(config)
})

test("invalid values", () => {
  expect(parse(null as any)).toEqual({})
  expect(parse(true as any)).toEqual({})
})
