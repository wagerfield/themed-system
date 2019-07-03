import { RegistryConfig } from "../types"
import { variant } from "./common"

export interface VariantConfig {
  textStyle: "tst"
  colorStyle: "cst"
  inputStyle: "ist"
  buttonStyle: "bst"
  globalStyle: "gst"
}

export const variantConfig: RegistryConfig<VariantConfig> = {
  textStyle: variant({
    theme: "textStyles"
  }),
  colorStyle: variant({
    theme: "colorStyles"
  }),
  inputStyle: variant({
    theme: "inputStyles"
  }),
  buttonStyle: variant({
    theme: "buttonStyles"
  }),
  globalStyle: variant({
    theme: "globalStyles"
  })
}
