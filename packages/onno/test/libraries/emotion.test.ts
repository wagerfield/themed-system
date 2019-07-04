import { css as emotionCSS } from "emotion"
import { css, props } from "../../src"

describe("css", () => {
  const styles = css({ direction: "ltr" })

  test("emotion css", () => {
    emotionCSS(styles)
  })
})

describe("props", () => {
  const render = props(["color", "display"])

  test("emotion css", () => {
    emotionCSS(render({}))
  })
})
