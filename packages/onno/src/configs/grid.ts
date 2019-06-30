import { RegistryConfig } from "../types"
import { space } from "./common"

// Grid Parent

export interface GridParentConfig {
  grid: "g"
  gridAutoColumns: "gac"
  gridAutoRows: "gar"
  gridAutoFlow: "gaf"
  gridTemplate: "gt"
  gridTemplateAreas: "gta"
  gridTemplateColumns: "gtc"
  gridTemplateRows: "gtr"
  gridGap: "gg"
  gridColumnGap: "gcg"
  gridRowGap: "grg"
}

export const gridParentConfig: RegistryConfig<GridParentConfig> = {
  grid: "g",
  gridAutoColumns: "gac",
  gridAutoRows: "gar",
  gridAutoFlow: "gaf",
  gridTemplate: "gt",
  gridTemplateAreas: "gta",
  gridTemplateColumns: "gtc",
  gridTemplateRows: "gtr",
  gridGap: space("gg"),
  gridColumnGap: space("gcg"),
  gridRowGap: space("grg")
}

// Grid Child

export interface GridChildConfig {
  gridArea: "ga"
  gridColumn: "gc"
  gridColumnStart: "gcs"
  gridColumnEnd: "gce"
  gridRow: "gr"
  gridRowStart: "grs"
  gridRowEnd: "gre"
}

export const gridChildConfig: RegistryConfig<GridChildConfig> = {
  gridArea: "ga",
  gridColumn: "gc",
  gridColumnStart: "gcs",
  gridColumnEnd: "gce",
  gridRow: "gr",
  gridRowStart: "grs",
  gridRowEnd: "gre"
}
