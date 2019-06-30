import { register, registry } from "../src/registry"

test("parses and registers configs", () => {
  expect(registry).toEqual({})

  register({
    key1: 1,
    key2: "k2",
    key3: {
      style: "sk",
      theme: "tk",
      index: 3
    },
    key4: ["key1", "key2", "key3"]
  })

  expect(registry).toEqual({
    key1: {
      props: "key1",
      index: 1
    },
    key2: {
      props: ["key2", "k2"]
    },
    key3: {
      props: "key3",
      style: "sk",
      theme: "tk",
      index: 3
    },
    key4: ["key1", "key2", "key3"]
  })
})
