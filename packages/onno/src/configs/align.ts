import { RegistryConfig } from "../types"

// Align Parent

export interface AlignParentConfig {
  alignContent: "alc"
  alignItems: "ali"
  justifyContent: "jfc"
  justifyItems: "jfi"
  placeContent: "plc"
  placeItems: "pli"
}

export const alignParentConfig: RegistryConfig<AlignParentConfig> = {
  alignContent: "alc",
  alignItems: "ali",
  justifyContent: "jfc",
  justifyItems: "jfi",
  placeContent: "plc",
  placeItems: "pli"
}

// Align Child

export interface AlignChildConfig {
  alignSelf: "als"
  justifySelf: "jfs"
  placeSelf: "pls"
  order: "ord"
}

export const alignChildConfig: RegistryConfig<AlignChildConfig> = {
  alignSelf: "als",
  justifySelf: "jfs",
  placeSelf: "pls",
  order: "ord"
}
