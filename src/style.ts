import * as T from "./types"
import * as U from "./utils"

export const BREAKPOINTS: T.Breakpoints = [
  { alias: "xs", value: 360 * 0 },
  { alias: "sm", value: 360 * 1 },
  { alias: "md", value: 360 * 2 },
  { alias: "lg", value: 360 * 3 },
  { alias: "xl", value: 360 * 4 }
]

export function render<S extends T.Style>(keys?: T.Keys, value?: any) {
  if (U.isNil(value) || !U.isArray(keys) || !keys.length) return null
  return keys.reduce(
    (s, k) => {
      s[k] = value
      return s
    },
    {} as S
  )
}

export function style<P extends T.ThemeProps, S extends T.Style>(
  options: T.StyleOptions
): T.StyleFunction<P, S> {
  const { propsKeys, styleKeys, themeKeys, transform, fallback } = options
  const keys = U.isArray(styleKeys) ? styleKeys : propsKeys.slice(0, 1)

  // Create scoped renderValue style function
  const renderValue = (value: any, theme?: T.Theme) => {
    let themed = false

    // Resolve theme value
    if (theme && U.isArray(themeKeys)) {
      const mappedKeys = themeKeys.map((k) => `${k}.${value}`)
      const themeValue = U.resolve(mappedKeys, theme)
      themed = !U.isNil(themeValue)
      if (themed) value = themeValue
    }

    // Resolve fallback value
    if (fallback && !themed) {
      const fallbackValue = U.get(value, fallback)
      if (!U.isNil(fallbackValue)) value = fallbackValue
    }

    // Transform value
    if (typeof transform === "function") value = transform(value)

    // Render style object
    return render<S>(keys, value)
  }

  // Create scoped renderProps style function
  const renderProps: T.StyleFunction<P, S> = (props: P) => {
    // Get first propsValue from propsKeys
    const propsValue = U.resolve(propsKeys, props)

    // Return null when value is undefined
    if (U.isNil(propsValue)) return null

    // Build styles array
    const { theme } = props
    const styles: T.StyleArray<S> = []
    const pushStyle = (value: any, query?: string) => {
      const result: T.StyleObject<S> | null = renderValue(value, theme)
      return result && styles.push(query ? { [query]: result } : result)
    }

    // Handle responsive prop values
    if (typeof propsValue === "object") {
      const breakpoints = (theme && theme.breakpoints) || BREAKPOINTS
      if (U.isArray(breakpoints)) {
        breakpoints.forEach((value: any, index) => {
          const breakpoint = U.get(index, breakpoints)
          const styleValue = U.resolve([index, value.alias], propsValue)
          if (!U.isNil(styleValue)) pushStyle(styleValue, U.mq(breakpoint))
        })
      }
    } else pushStyle(propsValue)

    // Return styles array when not empty
    return styles.length ? styles : null
  }

  // Store options on renderProps function
  renderProps.options = options

  // Return renderProps function
  return renderProps
}

export const extend = (a: Partial<T.StyleOptions>) => <
  P extends T.ThemeProps,
  S extends T.Style
>(
  b: T.StyleOptions
) => style<P, S>({ ...a, ...b })

export const compose = <P extends T.ThemeProps, S extends T.Style>(
  styles: T.StyleFunction<any, any>[]
): T.StyleFunction<P, S> => (props: P) =>
  styles.reduce(
    (a, f) => {
      const r = f(props)
      return r ? a.concat(r) : a
    },
    [] as S[]
  )
