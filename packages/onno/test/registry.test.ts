import { clear, registry, register, unregister } from "../src/registry"

beforeEach(clear)

test("register config object", () => {
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

test("register config array", () => {
  expect(registry).toEqual({})

  register([{ key1: 1 }, { key2: "k2" }])

  expect(registry).toEqual({
    key1: {
      props: "key1",
      index: 1
    },
    key2: {
      props: ["key2", "k2"]
    }
  })
})

test("unregister", () => {
  expect(registry).toEqual({})

  register({ key1: 1, key2: 2, key3: 3 })

  expect(registry).toEqual({
    key1: {
      props: "key1",
      index: 1
    },
    key2: {
      props: "key2",
      index: 2
    },
    key3: {
      props: "key3",
      index: 3
    }
  })

  unregister(["key1", "key3"])

  expect(registry).toEqual({
    key2: {
      props: "key2",
      index: 2
    }
  })
})

test("clear", () => {
  expect(registry).toEqual({})

  register({ key1: 1 })

  expect(registry).toEqual({
    key1: {
      props: "key1",
      index: 1
    }
  })

  clear()

  expect(registry).toEqual({})
})
