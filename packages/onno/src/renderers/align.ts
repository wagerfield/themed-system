import * as C from "csstype"
import * as T from "../types"

interface AlignConfig {
  // Align
  alignContent: [C.AlignContentProperty, "alc"]
  alignItems: [C.AlignItemsProperty, "ali"]
  alignSelf: [C.AlignSelfProperty, "als"]
  // Justify
  justifyContent: [C.JustifyContentProperty, "jfc"]
  justifyItems: [C.JustifyItemsProperty, "jfi"]
  justifySelf: [C.JustifySelfProperty, "jfs"]
  // Place
  placeContent: [C.PlaceContentProperty, "plc"]
  placeItems: [C.PlaceItemsProperty, "pli"]
  placeSelf: [C.PlaceSelfProperty, "pls"]
  // Order
  order: [C.Globals | number, "ord"]
}

export type AlignProps = T.ResponsiveProps<AlignConfig>

export const alignConfig: T.RegistryConfig<AlignConfig> = {
  // Align
  alignContent: "alc",
  alignItems: "ali",
  alignSelf: "als",
  // Justify
  justifyContent: "jfc",
  justifyItems: "jfi",
  justifySelf: "jfs",
  // Place
  placeContent: "plc",
  placeItems: "pli",
  placeSelf: "pls",
  // Order
  order: "ord"
}
