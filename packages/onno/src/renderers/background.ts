import * as C from "csstype"
import * as T from "../types"
import { color, size } from "./configs"

interface BackgroundConfig {
  background: [C.BackgroundProperty<T.Length>, "bg"]
  backgroundColor: [C.BackgroundColorProperty, "bgc"]
  backgroundImage: [C.BackgroundImageProperty, "bgi"]
  backgroundPosition: [C.BackgroundPositionProperty<T.Length>, "bgp"]
  backgroundRepeat: [C.BackgroundRepeatProperty, "bgr"]
  backgroundSize: [C.BackgroundSizeProperty<T.Length>, "bgs"]
}

export type BackgroundProps = T.ResponsiveProps<BackgroundConfig>

export const backgroundConfig: T.RegistryConfig<BackgroundConfig> = {
  background: color("bg"),
  backgroundColor: color("bgc"),
  backgroundImage: "bgi",
  backgroundPosition: size("bgp"),
  backgroundRepeat: "bgr",
  backgroundSize: size("bgs")
}
