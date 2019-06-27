import * as C from "csstype"
import * as T from "../types"

export interface TransformConfig {
  perspective: [C.PerspectiveProperty<T.Length>, "ps"]
  perspectiveOrigin: [C.PerspectiveOriginProperty<T.Length>, "pso"]
  transform: [C.TransformProperty, "tf"]
  transformOrigin: [C.TransformOriginProperty<T.Length>, "tfo"]
}

export type TransformProps = T.ResponsiveProps<TransformConfig>

export const transformConfig: T.RegistryConfig<TransformConfig> = {
  perspective: "ps",
  perspectiveOrigin: "pso",
  transform: "tf",
  transformOrigin: "tfo"
}
