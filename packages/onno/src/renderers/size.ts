import * as C from "csstype"
import * as T from "../types"
import { size } from "./configs"

export interface SizeConfig {
  size: [C.WidthProperty<T.Length> & C.HeightProperty<T.Length>, "s"]
  width: [C.WidthProperty<T.Length>, "w"]
  minWidth: [C.MinWidthProperty<T.Length>, "minw"]
  maxWidth: [C.MaxWidthProperty<T.Length>, "maxw"]
  height: [C.HeightProperty<T.Length>, "h"]
  minHeight: [C.MinHeightProperty<T.Length>, "minh"]
  maxHeight: [C.MaxHeightProperty<T.Length>, "maxh"]
}

export type SizeProps = T.ResponsiveProps<SizeConfig>

const extendSize = (propsKeys: T.Key, themeKey: T.Key) =>
  size({ propsKeys, themeKeys: [themeKey, "sizes"] })

export const sizeConfig: T.RegistryConfig<SizeConfig> = {
  size: size({
    propsKeys: "s",
    styleKeys: ["width", "height"]
  }),
  width: extendSize("w", "widths"),
  minWidth: extendSize("minw", "minWidths"),
  maxWidth: extendSize("maxw", "maxWidths"),
  height: extendSize("h", "heights"),
  minHeight: extendSize("minh", "minHeights"),
  maxHeight: extendSize("maxh", "maxHeights")
}
