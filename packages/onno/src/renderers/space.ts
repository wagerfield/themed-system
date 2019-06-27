import * as C from "csstype"
import * as T from "../types"
import { edges, space } from "./configs"

// Margin

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

// Padding

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
