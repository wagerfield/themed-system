import * as C from "csstype"
import * as T from "../types"
import { edges, space } from "./configs"

type PaddingProperty = C.PaddingProperty<T.Length>

export interface PaddingConfig {
  padding: [PaddingProperty, "p"]
  paddingX: [PaddingProperty, "px"]
  paddingY: [PaddingProperty, "py"]
  paddingTop: [PaddingProperty, "pt"]
  paddingRight: [PaddingProperty, "pr"]
  paddingBottom: [PaddingProperty, "pb"]
  paddingLeft: [PaddingProperty, "pl"]
}

export type PaddingProps = T.ResponsiveProps<PaddingConfig>

export const paddingConfig = edges("padding", "p", space)
