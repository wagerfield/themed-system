import { Index, Key, Keys } from "./primitives"
import { RendererConfig } from "./renderer"

// Registry

export type RegistryValue = Keys | RendererConfig

export interface Registry {
  [key: string]: RegistryValue
}

// Registry Config

export type RegistryConfigValue = RegistryValue | Index | Key

export type RegistryConfig<C = any> = {
  [K in keyof C]: RegistryConfigValue
}

// Parse Registry Config

export type ParseRegistryConfig = (value: RegistryConfigValue) => RegistryValue

// Extend Registry Config

export type ExtendRegistryConfig = (
  value: RegistryConfigValue
) => ParseRegistryConfig
