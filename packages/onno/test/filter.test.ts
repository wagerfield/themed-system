/* tslint:disable:no-unused-expression */

import { filter, omit, pick } from "../src/filter"
import { AnyFunction } from "./test-utils"

interface Props {
  a: "a" | 1
  b: "b" | 2
  c: "c" | 3
}

const props: Props = {
  a: "a",
  b: "b",
  c: "c"
}

test("filter", () => {
  const omitKeys = filter(true)
  const pickKeys = filter(false)

  expect(filter).toEqual(AnyFunction)
  expect(omitKeys).toEqual(AnyFunction)
  expect(pickKeys).toEqual(AnyFunction)

  expect(filter).toHaveLength(1)
  expect(omitKeys).toHaveLength(1)
  expect(pickKeys).toHaveLength(1)
})

test("omit", () => {
  const omitKeys = omit([])
  expect(omitKeys).toEqual(AnyFunction)
  expect(omitKeys).toHaveLength(1)

  expect(omit(["a"])(props)).toEqual({ b: "b", c: "c" })
  expect(omit(["b", "c"])(props)).toEqual({ a: "a" })
  expect(omit(["a", "b", "c"])(props)).toEqual({})

  const result = omit(["a"])(props)
  // result.a // error
  result.b // (property) b: "b" | 2
  result.c // (property) c: "c" | 3
})

test("pick", () => {
  const pickKeys = pick([])
  expect(pickKeys).toEqual(AnyFunction)
  expect(pickKeys).toHaveLength(1)

  expect(pick(["a"])(props)).toEqual({ a: "a" })
  expect(pick(["b", "c"])(props)).toEqual({ b: "b", c: "c" })
  expect(pick(["a", "b", "c"])(props)).toEqual({ a: "a", b: "b", c: "c" })

  const result = pick(["a"])(props)
  result.a // (property) a: "a" | 1
  // result.b // error
  // result.c // error
})
