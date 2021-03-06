import * as O from "../src"
import * as U from "./test-utils"

test("returns style factory", () => {
  const styleFact = O.extend({})
  expect(styleFact).toEqual(expect.any(Function))
  expect(styleFact).toHaveLength(1)
})

test("returns style function", () => {
  const styleFact = O.extend({})
  const styleFunc = styleFact<any, any>({ propsKeys: ["a"] })
  expect(styleFunc).toEqual(expect.any(Function))
  expect(styleFunc).toHaveLength(1)
})

test("returns style object array", () => {
  const styleFact = O.extend({})
  const styleFunc = styleFact<any, any>({ propsKeys: ["a", "b"] })
  const testProps = U.snapshot(styleFunc)
  testProps({ a: "foo" })
  testProps({ b: "bar" })
})

test("overrides base options", () => {
  const styleFact = O.extend({
    propsKeys: ["a", "b"],
    styleKeys: ["x", "y"]
  })
  const styleFunc = styleFact<any, any>({
    propsKeys: ["c", "d"]
  })
  const testProps = U.snapshot(styleFunc)
  testProps({ a: "A" })
  testProps({ b: "B" })
  testProps({ c: "C" })
  testProps({ d: "D" })
})
