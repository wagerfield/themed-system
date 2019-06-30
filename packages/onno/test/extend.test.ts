import { extend } from "../src/registry"

test("returns registry config parser", () => {
  const parser = extend(1)
  expect(parser).toEqual(expect.any(Function))
  expect(parser).toHaveLength(1)
})

test("extends registry number config", () => {
  const parser = extend(1)

  expect(parser(2)).toEqual({
    index: 2
  })
  expect(parser("foo")).toEqual({
    propsKeys: "foo",
    index: 1
  })
  expect(
    parser({
      styleKeys: "sk",
      themeKeys: "tk"
    })
  ).toEqual({
    styleKeys: "sk",
    themeKeys: "tk",
    index: 1
  })
})

test("extends registry string config", () => {
  const parser = extend("foo")

  expect(parser(1)).toEqual({
    propsKeys: "foo",
    index: 1
  })
  expect(parser("bar")).toEqual({
    propsKeys: "bar"
  })
  expect(
    parser({
      styleKeys: "sk",
      themeKeys: "tk"
    })
  ).toEqual({
    propsKeys: "foo",
    styleKeys: "sk",
    themeKeys: "tk"
  })
})

test("extends registry object config", () => {
  const parser = extend({
    propsKeys: "pk",
    styleKeys: "sk",
    themeKeys: "tk",
    index: 1
  })

  expect(parser(2)).toEqual({
    propsKeys: "pk",
    styleKeys: "sk",
    themeKeys: "tk",
    index: 2
  })
  expect(parser("foo")).toEqual({
    propsKeys: "foo",
    styleKeys: "sk",
    themeKeys: "tk",
    index: 1
  })
  expect(
    parser({
      styleKeys: "sk2",
      themeKeys: "tk2"
    })
  ).toEqual({
    propsKeys: "pk",
    styleKeys: "sk2",
    themeKeys: "tk2",
    index: 1
  })
})
