/* tslint:disable:no-unused-expression */

import { map } from "../src/map"

const props = {
  width: "width",
  height: "height",
  foo: "foo",
  bar: "bar",
  w: "w",
  h: "h",
  f: "f",
  b: "b"
}

test("omit", () => {
  const render = map(["width", "height"])
  const omittedProps = render.omit(props)

  omittedProps.foo
  omittedProps.bar
  omittedProps.f
  omittedProps.b

  expect(
    render.omit({
      width: "width",
      height: "height",
      size: "size"
    })
  ).toEqual({
    size: "size"
  })
})

test("pick", () => {
  const render = map(["width", "height"])
  const pickedProps = render.pick(props)

  pickedProps.width
  pickedProps.height
  pickedProps.w
  pickedProps.h

  expect(
    render.pick({
      width: "width",
      height: "height",
      size: "size"
    })
  ).toEqual({
    width: "width",
    height: "height"
  })
})
