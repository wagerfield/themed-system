import { clear, registry, register, unregister, getKeys } from "../src/registry"
import { concat } from "../src/utils"

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

test("getKeys", () => {
  register({
    key1: 1,
    key2: "k2",
    key3: { props: ["k3", "k"] },
    key4: ["key1", "key2"],
    key5: ["key2", "key3"],
    key6: ["key3", "key4"],
    key7: ["key5", "key6"]
  })

  const KX = ["keyX"]
  const K1 = ["key1"]
  const K2 = ["key2", "k2"]
  const K3 = ["key3", "k3", "k"]

  expect(getKeys(["keyX"])).toEqual(concat(KX))
  expect(getKeys(["key1", "keyX"])).toEqual(concat(K1, KX))
  expect(getKeys(["key2", "keyX"])).toEqual(concat(K2, KX))
  expect(getKeys(["key3", "keyX"])).toEqual(concat(K3, KX))
  expect(getKeys(["key4", "keyX"])).toEqual(concat(K1, K2, KX))
  expect(getKeys(["key5", "keyX"])).toEqual(concat(K2, K3, KX))
  expect(getKeys(["key6", "keyX"])).toEqual(concat(K3, K1, K2, KX))
  expect(getKeys(["key7", "keyX"])).toEqual(concat(K2, K3, K1, KX))
  expect(getKeys(["key7", "keyX"], false)).toEqual(
    concat(K2, K3, K3, K1, K2, KX)
  )
})
