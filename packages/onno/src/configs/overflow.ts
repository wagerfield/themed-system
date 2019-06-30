import { RegistryConfig } from "../types"

export interface OverflowConfig {
  overflow: "of"
  overflowX: "ofx"
  overflowY: "ofy"
}

export const overflowConfig: RegistryConfig<OverflowConfig> = {
  overflow: "of",
  overflowX: "ofx",
  overflowY: "ofy"
}
