import * as C from "csstype"
import * as T from "../types"
import { edges, space } from "./configs"

type MarginProperty = C.MarginProperty<T.Length>

export interface MarginConfig {
  margin: [MarginProperty, "m"]
  marginX: [MarginProperty, "mx"]
  marginY: [MarginProperty, "my"]
  marginTop: [MarginProperty, "mt"]
  marginRight: [MarginProperty, "mr"]
  marginBottom: [MarginProperty, "mb"]
  marginLeft: [MarginProperty, "ml"]
}

export type MarginProps = T.ResponsiveProps<MarginConfig>

export const marginConfig = edges("margin", "m", space)
