/* tslint:disable:no-unused-expression */

import { map } from "../src/map"

test("omit", () => {
  const render = map(["width", "height"])
  const omit1 = render.omit({ width: "w", size: "s" })
  const omit2 = render.omit({ h: "h", s: "s" })

  omit1.size
  omit2.s

  // expect(
  //   render.omit({
  //     width: "w",
  //     height: "h",
  //     size: "s"
  //   })
  // ).toEqual({
  //   size: "s"
  // })
})

test("pick", () => {
  const render = map(["width", "height"])
  const pick1 = render.pick({ width: "w", size: "s" })
  const pick2 = render.pick({ h: "h", s: "s" })

  pick1.width
  pick2.h

  // expect(
  //   render.pick({
  //     width: "w",
  //     height: "h",
  //     size: "s"
  //   })
  // ).toEqual({
  //   width: "w",
  //   height: "h"
  // })
})
