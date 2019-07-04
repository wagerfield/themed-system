import styled, { css as styledCSS } from "styled-components"
import { css, props } from "../../src"

describe("css", () => {
  const styles = css({ direction: "ltr" })

  test("styled-components css", () => {
    styledCSS({}, styles)
  })

  test("styled-components styled object", () => {
    styled.a({}, styles)
  })

  test("styled-components styled template", () => {
    // tslint:disable-next-line
    styled.a`
      ${styles}
    `
  })
})

describe("props", () => {
  const render = props(["color", "display"])

  test("styled-components css", () => {
    styledCSS(render)
  })

  test("styled-components styled object", () => {
    styled.a(render)
  })

  test("styled-components styled template", () => {
    // tslint:disable-next-line
    styled.a`
      ${render}
    `
  })
})
