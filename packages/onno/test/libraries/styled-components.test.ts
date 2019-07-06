/* tslint:disable:no-unused-expression */

import styled, { css as styledCSS } from "styled-components"
import { css, map } from "../../src"

describe("css", () => {
  const styles = css({ direction: "ltr" })

  test("styled-components css", () => {
    styledCSS({}, styles)
  })

  test("styled-components styled object", () => {
    styled.a({}, styles)
  })

  test("styled-components styled template", () => {
    styled.a`
      ${styles}
    `
  })
})

describe("map", () => {
  const render = map(["boxSizing", "sizeSet"])

  test("styled-components css", () => {
    styledCSS(render)
  })

  test("styled-components styled object", () => {
    styled.a(render)
  })

  test("styled-components styled template", () => {
    styled.a`
      ${render}
    `
  })
})
