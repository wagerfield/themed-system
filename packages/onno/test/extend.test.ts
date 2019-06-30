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
    props: "foo",
    index: 1
  })
  expect(
    parser({
      style: "sk",
      theme: "tk"
    })
  ).toEqual({
    style: "sk",
    theme: "tk",
    index: 1
  })
})

test("extends registry string config", () => {
  const parser = extend("foo")

  expect(parser(1)).toEqual({
    props: "foo",
    index: 1
  })
  expect(parser("bar")).toEqual({
    props: "bar"
  })
  expect(
    parser({
      style: "sk",
      theme: "tk"
    })
  ).toEqual({
    props: "foo",
    style: "sk",
    theme: "tk"
  })
})

test("extends registry object config", () => {
  const parser = extend({
    props: "pk",
    style: "sk",
    theme: "tk",
    index: 1
  })

  expect(parser(2)).toEqual({
    props: "pk",
    style: "sk",
    theme: "tk",
    index: 2
  })
  expect(parser("foo")).toEqual({
    props: "foo",
    style: "sk",
    theme: "tk",
    index: 1
  })
  expect(
    parser({
      style: "sk2",
      theme: "tk2"
    })
  ).toEqual({
    props: "pk",
    style: "sk2",
    theme: "tk2",
    index: 1
  })
})
