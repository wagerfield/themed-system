import * as C from "csstype"
import * as T from "../types"

// Flex Parent

interface FlexParentConfig {
  flexDirection: [C.FlexDirectionProperty, "fld"]
  flexFlow: [C.FlexFlowProperty, "flf"]
  flexWrap: [C.FlexWrapProperty, "flw"]
}

export type FlexParentProps = T.ResponsiveProps<FlexParentConfig>

export const flexParentConfig: T.RegistryConfig<FlexParentConfig> = {
  flexDirection: "fld",
  flexFlow: "flf",
  flexWrap: "flw"
}

// Flex Child

interface FlexChildConfig {
  flex: [C.FlexProperty<T.Length>, "fl"]
  flexBasis: [C.FlexBasisProperty<T.Length>, "flb"]
  flexGrow: [C.Globals | number, "flg"]
  flexShrink: [C.Globals | number, "fls"]
}

export type FlexChildProps = T.ResponsiveProps<FlexChildConfig>

export const flexChildConfig: T.RegistryConfig<FlexChildConfig> = {
  flex: "fl",
  flexBasis: "flb",
  flexGrow: "flg",
  flexShrink: "fls"
}
