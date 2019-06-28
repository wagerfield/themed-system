import { register, registry } from "../src/core"

test("parses and registers configs", () => {
  expect(registry).toEqual({})

  register({
    key1: 1,
    key2: "k2",
    key3: ["k3", "k"],
    key4: {
      styleKeys: "sk",
      themeKeys: "tk",
      index: 4
    }
  })

  expect(registry).toEqual({
    key1: {
      propsKeys: "key1",
      index: 1
    },
    key2: {
      propsKeys: ["key2", "k2"]
    },
    key3: {
      propsKeys: ["key3", "k3", "k"]
    },
    key4: {
      propsKeys: "key4",
      styleKeys: "sk",
      themeKeys: "tk",
      index: 4
    }
  })
})
