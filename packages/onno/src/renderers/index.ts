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
import { SizeConfig, SizeProps } from "./size"
import { MarginConfig, MarginProps, PaddingConfig, PaddingProps } from "./space"
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
  SizeConfig &
  MarginConfig &
  PaddingConfig &
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
  SizeProps &
  MarginProps &
  PaddingProps &
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
export * from "./size"
export * from "./space"
export * from "./text"
export * from "./transform"
