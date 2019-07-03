import { RegistryConfig, RendererConfig, RendererKeys } from "../types"

export interface VariantConfig {
  textStyle: "tst"
  colorStyle: "cst"
  inputStyle: "ist"
  buttonStyle: "bst"
  globalStyle: "gst"
}

export const variant = (
  props: RendererKeys,
  theme: RendererKeys
): RendererConfig => ({
  props,
  theme,
  style: null
})

export const variantConfig: RegistryConfig<VariantConfig> = {
  textStyle: variant("tst", "textStyles"),
  colorStyle: variant("cst", "colorStyles"),
  inputStyle: variant("ist", "inputStyles"),
  buttonStyle: variant("bst", "buttonStyles"),
  globalStyle: variant("gst", "globalStyles")
}
