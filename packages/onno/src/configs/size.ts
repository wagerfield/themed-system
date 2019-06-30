import { Key, RegistryConfig } from "../types"
import { size } from "./common"

const extendSize = (propsKeys: Key, themeKey: Key) =>
  size({ propsKeys, themeKeys: [themeKey, "sizes"] })

// Width

export interface WidthConfig {
  width: "w"
  minWidth: "minw"
  maxWidth: "maxw"
}

export const widthConfig: RegistryConfig<WidthConfig> = {
  width: extendSize("w", "widths"),
  minWidth: extendSize("minw", "minWidths"),
  maxWidth: extendSize("maxw", "maxWidths")
}

// Height

export interface HeightConfig {
  height: "h"
  minHeight: "minh"
  maxHeight: "maxh"
}

export const heightConfig: RegistryConfig<HeightConfig> = {
  height: extendSize("h", "heights"),
  minHeight: extendSize("minh", "minHeights"),
  maxHeight: extendSize("maxh", "maxHeights")
}

// Size

export interface SizeConfig {
  size: "s"
}

export const sizeConfig: RegistryConfig<SizeConfig> = {
  size: size({
    propsKeys: "s",
    styleKeys: ["width", "height"]
  })
}
