import { AlignParentConfig, AlignChildConfig } from "./align"
import { AnimationConfig } from "./animation"
import { BackgroundConfig } from "./background"
import { BorderConfig } from "./border"
import { DisplayConfig } from "./display"
import { FlexParentConfig, FlexChildConfig } from "./flex"
import { GridParentConfig, GridChildConfig } from "./grid"
import { MiscConfig } from "./misc"
import { OutlineConfig } from "./outline"
import { OverflowConfig } from "./overflow"
import { PositionConfig } from "./position"
import { ShadowConfig } from "./shadow"
import { WidthConfig, HeightConfig, SizeConfig } from "./size"
import { MarginConfig, PaddingConfig } from "./space"
import { TransformConfig } from "./transform"
import { TypographyConfig } from "./typography"
import { VariantConfig } from "./variant"
import { SetsConfig } from "./sets"

export type Configs = AlignParentConfig &
  AlignChildConfig &
  AnimationConfig &
  BackgroundConfig &
  BorderConfig &
  DisplayConfig &
  FlexParentConfig &
  FlexChildConfig &
  GridParentConfig &
  GridChildConfig &
  MiscConfig &
  OutlineConfig &
  OverflowConfig &
  PositionConfig &
  ShadowConfig &
  WidthConfig &
  HeightConfig &
  SizeConfig &
  MarginConfig &
  PaddingConfig &
  TransformConfig &
  TypographyConfig &
  VariantConfig &
  SetsConfig

export type ConfigKey = keyof Configs

export * from "./space"
export * from "./align"
export * from "./animation"
export * from "./background"
export * from "./border"
export * from "./display"
export * from "./flex"
export * from "./grid"
export * from "./misc"
export * from "./outline"
export * from "./overflow"
export * from "./position"
export * from "./shadow"
export * from "./size"
export * from "./transform"
export * from "./typography"
export * from "./variant"
export * from "./sets"
