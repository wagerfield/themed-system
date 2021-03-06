import * as U from "./test-utils"

const defaults = ["F0", "F1", "F2"]
const themeKeys = ["t.u.v"]

const theme1 = {
  t: ["T0"],
  u: ["U0", "U1"]
}

const theme2 = {
  t: {
    u: {
      v: ["0V", "1V"]
    }
  }
}

const theme3 = {
  v: [{ alias: "foo", value: 11 }, { alias: "bar", value: 22 }]
}

const theme4 = {
  u: null
}

const theme5 = {
  v: {
    foo: {
      one: "one"
    },
    bar: {
      two: "two"
    }
  }
}

test("supports theme", () => {
  const testProps = U.snapshot(U.style())
  testProps({ a: 0, theme: theme1 }, "0")
  testProps({ a: 1, theme: theme1 }, "1")
  testProps({ a: 2, theme: theme1 }, "2")
})

test("supports nested theme", () => {
  const testProps = U.snapshot(U.style({ themeKeys }))
  testProps({ a: 0, theme: theme2 }, "0")
  testProps({ a: 1, theme: theme2 }, "1")
  testProps({ a: 2, theme: theme2 }, "2")
})

test("supports theme and defaults", () => {
  const testProps = U.snapshot(U.style({ defaults }))
  testProps({ a: 0, theme: theme1 }, "0")
  testProps({ a: 1, theme: theme1 }, "1")
  testProps({ a: 2, theme: theme1 }, "2")
})

test("supports nested theme and defaults", () => {
  const testProps = U.snapshot(U.style({ defaults, themeKeys }))
  testProps({ a: 0, theme: theme2 }, "0")
  testProps({ a: 1, theme: theme2 }, "1")
  testProps({ a: 2, theme: theme2 }, "2")
})

test("supports theme array aliases", () => {
  const testProps = U.snapshot(U.style())
  testProps({ a: "foo", theme: theme3 }, "foo")
  testProps({ a: "bar", theme: theme3 }, "bar")
  testProps({ a: "baz", theme: theme3 }, "baz")
  testProps({ a: 0, theme: theme3 }, "0")
  testProps({ a: 1, theme: theme3 }, "1")
  testProps({ a: 2, theme: theme3 }, "2")
})

test("defaults can be nullified", () => {
  const testProps = U.snapshot(U.style({ defaults }))
  testProps({ a: 1, theme: theme4 })
  testProps({ a: 1 })
})

test("styleKeys can be nullified", () => {
  const testProps = U.snapshot(U.style({ styleKeys: null }))
  testProps({ a: "foo", theme: theme5 })
  testProps({ b: "bar", theme: theme5 })
  testProps({ a: "baz", theme: theme5 })
})
