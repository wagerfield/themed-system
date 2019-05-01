import { Keys, Props, Style, StyleOptions, StyleFunction } from "./types"
import * as U from "./utils"

export const createStyle = <S extends Style>(value?: any, keys?: Keys) => {
  if (U.isNil(value) || !U.isArray(keys)) return null
  return keys.reduce(
    (s, k) => {
      s[k] = value
      return s
    },
    {} as S
  )
}

export const style = <P extends Props, S extends Style>({
  propsKeys,
  styleKeys,
  themeKeys,
  transform,
  fallback
}: StyleOptions): StyleFunction<P, S> => (props: P) => {
  // Get first props value from propsKeys
  let value = U.getValue(props, propsKeys)

  // Return null when value is undefined
  if (U.isNil(value)) return null

  // // Resolve lookup from themeKey
  const lookup = U.pathOr(fallback)(["theme", "todo"])(props)

  // Resolve style keys
  const keys = U.isArray(styleKeys) ? styleKeys : propsKeys.slice(0, 1)

  // Resolve value from lookup path
  value = U.pathOr(value)(U.toPath(value))(lookup)

  // Transform value
  if (U.isFunction(transform)) value = transform(value)

  // Create style from value and keys
  const result = createStyle<S>(value, keys)

  // Return style array
  return result && [result]
}

export const compose = <P extends Props, S extends Style>(
  styles: StyleFunction<any, any>[]
): StyleFunction<P, S> => (props: P) =>
  styles.reduce(
    (a, f) => {
      const s = f(props)
      return s ? a.concat(s) : a
    },
    [] as S[]
  )

export const extend = (a: Partial<StyleOptions>) => <
  P extends Props,
  S extends Style
>(
  b: StyleOptions
) => style<P, S>({ ...a, ...b })
