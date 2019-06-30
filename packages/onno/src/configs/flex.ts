import { RegistryConfig } from "../types"

// Flex Parent

export interface FlexParentConfig {
  flexDirection: "fld"
  flexFlow: "flf"
  flexWrap: "flw"
}

export const flexParentConfig: RegistryConfig<FlexParentConfig> = {
  flexDirection: "fld",
  flexFlow: "flf",
  flexWrap: "flw"
}

// Flex Child

export interface FlexChildConfig {
  flex: "fl"
  flexBasis: "flb"
  flexGrow: "flg"
  flexShrink: "fls"
}

export const flexChildConfig: RegistryConfig<FlexChildConfig> = {
  flex: "fl",
  flexBasis: "flb",
  flexGrow: "flg",
  flexShrink: "fls"
}
