import { MiscConfig, MiscProps } from "./misc"
import { AlignConfig, AlignProps } from "./align"
import { AnimationConfig, AnimationProps } from "./animation"
import { BackgroundConfig, BackgroundProps } from "./background"
import { BorderConfig, BorderProps } from "./border"
import { DisplayConfig, DisplayProps } from "./display"
import {
  FlexParentConfig,
  FlexParentProps,
  FlexChildConfig,
  FlexChildProps
} from "./flex"
import {
  GridParentConfig,
  GridParentProps,
  GridChildConfig,
  GridChildProps
} from "./grid"
import { OutlineConfig, OutlineProps } from "./outline"
import { OverflowConfig, OverflowProps } from "./overflow"
import { PositionConfig, PositionProps } from "./position"
import { ShadowConfig, ShadowProps } from "./shadow"
import { MarginConfig, MarginProps } from "./margin"
import { PaddingConfig, PaddingProps } from "./padding"
import { SizeConfig, SizeProps } from "./size"
import { TextConfig, TextProps } from "./text"
import { TransformConfig, TransformProps } from "./transform"

export type RegistryConfigs = MiscConfig &
  AlignConfig &
  AnimationConfig &
  BackgroundConfig &
  BorderConfig &
  DisplayConfig &
  FlexParentConfig &
  FlexChildConfig &
  GridParentConfig &
  GridChildConfig &
  OutlineConfig &
  OverflowConfig &
  PositionConfig &
  ShadowConfig &
  MarginConfig &
  PaddingConfig &
  SizeConfig &
  TextConfig &
  TransformConfig

export type RegistryKeys = keyof RegistryConfigs

export type RendererProps = MiscProps &
  AlignProps &
  AnimationProps &
  BackgroundProps &
  BorderProps &
  DisplayProps &
  FlexParentProps &
  FlexChildProps &
  GridParentProps &
  GridChildProps &
  OutlineProps &
  OverflowProps &
  PositionProps &
  ShadowProps &
  MarginProps &
  PaddingProps &
  SizeProps &
  TextProps &
  TransformProps

export * from "./misc"
export * from "./align"
export * from "./animation"
export * from "./background"
export * from "./border"
export * from "./display"
export * from "./flex"
export * from "./grid"
export * from "./outline"
export * from "./overflow"
export * from "./position"
export * from "./shadow"
export * from "./margin"
export * from "./padding"
export * from "./size"
export * from "./text"
export * from "./transform"
