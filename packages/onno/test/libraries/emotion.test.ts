import { css as emotionCSS } from "emotion"
import { css, map } from "../../src"

describe("css", () => {
  const styles = css({ direction: "ltr" })

  test("emotion css", () => {
    emotionCSS(styles)
  })
})

describe("map", () => {
  const render = map(["boxSizing", "sizeSet"])

  test("emotion css", () => {
    emotionCSS(render({}))
  })
})
