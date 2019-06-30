import { edges, space } from "./configs"

// Margin

export interface MarginConfig {
  margin: "m"
  marginX: "mx"
  marginY: "my"
  marginTop: "mt"
  marginRight: "mr"
  marginBottom: "mb"
  marginLeft: "ml"
}

export const marginConfig = edges<MarginConfig>("margin", "m", space)

// Padding

export interface PaddingConfig {
  padding: "p"
  paddingX: "px"
  paddingY: "py"
  paddingTop: "pt"
  paddingRight: "pr"
  paddingBottom: "pb"
  paddingLeft: "pl"
}

export const paddingConfig = edges<PaddingConfig>("padding", "p", space)
