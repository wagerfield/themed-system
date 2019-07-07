import { Key, Flag, Props, FilterKeys, FilterProps, FilterValue } from "./types"

export function filter<E extends Flag>(exclude: E): FilterKeys<E> {
  return <K extends Key>(keys: K[]): FilterProps<K, E> => {
    const map: Record<Key, 1> = {}
    keys.forEach((key) => (map[key] = 1))
    return <P extends Props>(props: P) => {
      const result: Partial<P> = {}
      for (const key in props) {
        if (!map[key] === exclude) result[key] = props[key]
      }
      return result as FilterValue<K, E, P>
    }
  }
}

export const omit = filter(true)

export const pick = filter(false)
