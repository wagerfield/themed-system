import { RegistryConfig } from "../types"

export interface TransformConfig {
  perspective: "ps"
  perspectiveOrigin: "pso"
  transform: "tf"
  transformOrigin: "tfo"
}

export const transformConfig: RegistryConfig<TransformConfig> = {
  perspective: "ps",
  perspectiveOrigin: "pso",
  transform: "tf",
  transformOrigin: "tfo"
}
