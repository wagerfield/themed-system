import * as S from "../src"
import * as U from "./test-utils"

test("display", () => {
  const testProps = U.snapshot(S.display)
  testProps({ display: "block" })
  testProps({ d: "inline" })
})

test("position", () => {
  const testProps = U.snapshot(S.position)
  testProps({ position: "relative" })
  testProps({ pos: "absolute" })
})

test("verticalAlign", () => {
  const testProps = U.snapshot(S.verticalAlign)
  testProps({ verticalAlign: "baseline" })
  testProps({ va: "middle" })
})

test("zIndex", () => {
  const testProps = U.snapshot(S.zIndex)
  testProps({ zi: 2 })
  testProps({
    zIndex: 2,
    theme: {
      zIndices: [10, 20, 30]
    }
  })
})

test("top", () => {
  const testProps = U.snapshot(S.top)
  testProps({ top: 1 / 2 })
  testProps({ t: 0 })
})

test("right", () => {
  const testProps = U.snapshot(S.right)
  testProps({ right: 8 })
  testProps({ r: "20rem" })
})

test("bottom", () => {
  const testProps = U.snapshot(S.bottom)
  testProps({ bottom: -100 })
  testProps({ b: "auto" })
})

test("left", () => {
  const testProps = U.snapshot(S.left)
  testProps({ left: 0.05 })
  testProps({ l: 4 })
})

test("width", () => {
  const testProps = U.snapshot(S.width)
  testProps({ width: 1 })
  testProps({ w: 1 / 4 })
})

test("minWidth", () => {
  const testProps = U.snapshot(S.minWidth)
  testProps({ minWidth: "80vw" })
  testProps({ minw: 2 })
})

test("maxWidth", () => {
  const testProps = U.snapshot(S.maxWidth)
  testProps({ maxWidth: 4 })
  testProps({ maxw: -1 })
})

test("height", () => {
  const testProps = U.snapshot(S.height)
  testProps({ height: 0 })
  testProps({ h: "200%" })
})

test("minHeight", () => {
  const testProps = U.snapshot(S.minHeight)
  testProps({ minHeight: 8 })
  testProps({ minh: "40em" })
})

test("maxHeight", () => {
  const testProps = U.snapshot(S.maxHeight)
  testProps({ maxHeight: 10 })
  testProps({ maxh: 100 })
})

test("size", () => {
  const testProps = U.snapshot(S.size)
  testProps({ size: 6 })
  testProps({ s: 1 })
})

test("positionSet", () => {
  const testProps = U.snapshot(S.positionSet)
  testProps({
    position: "fixed",
    zIndex: 1,
    top: 0,
    right: 0.2,
    bottom: 1,
    left: "4rem"
  })
  testProps({
    pos: "absolute",
    zi: 2,
    t: 1,
    r: 2,
    b: 3,
    l: 4
  })
})

test("sizeSet", () => {
  const testProps = U.snapshot(S.sizeSet)
  testProps({
    size: 0.25,
    width: 150,
    minWidth: 1 / 2,
    maxWidth: 3 / 4,
    height: 2,
    minHeight: "100vh",
    maxHeight: "auto"
  })
  testProps({
    s: 1,
    w: 0.4,
    minw: "20em",
    maxw: "40ch",
    h: 8,
    minh: "50%",
    maxh: "100"
  })
})

test("layoutSet", () => {
  const testProps = U.snapshot(S.layoutSet)
  testProps({
    display: "flex",
    verticalAlign: "sub",
    position: "fixed",
    zIndex: 2,
    top: 0,
    right: 0.2,
    bottom: 60,
    left: "4rem",
    size: 0.25,
    width: 150,
    minWidth: 1 / 2,
    maxWidth: 3 / 4,
    height: 2,
    minHeight: "100vh",
    maxHeight: "auto"
  })
  testProps({
    d: "grid",
    va: "super",
    pos: "sticky",
    zi: 10,
    t: 1,
    r: 0.8,
    b: "auto",
    l: "5em",
    s: 1,
    w: 0.4,
    minw: "20em",
    maxw: "40ch",
    h: 8,
    minh: "50%",
    maxh: "100"
  })
})
