import * as C from "csstype"
import * as T from "../types"
import { size } from "./configs"

export interface PositionConfig {
  position: [C.PositionProperty, "pos"]
  zIndex: [C.ZIndexProperty, "zi"]
  top: [C.TopProperty<T.Length>, "t"]
  right: [C.RightProperty<T.Length>, "r"]
  bottom: [C.BottomProperty<T.Length>, "b"]
  left: [C.LeftProperty<T.Length>, "l"]
}

export type PositionProps = T.ResponsiveProps<PositionConfig>

export const positionConfig: T.RegistryConfig<PositionConfig> = {
  position: "pos",
  zIndex: {
    propsKeys: "zi",
    themeKeys: "zIndices"
  },
  top: size("t"),
  right: size("r"),
  bottom: size("b"),
  left: size("l")
}
