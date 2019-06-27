import * as C from "csstype"
import * as T from "../types"
import { space } from "./configs"

// Grid Parent

export interface GridParentConfig {
  grid: [C.GridProperty, "g"]
  gridAutoColumns: [C.GridAutoColumnsProperty<T.Length>, "gac"]
  gridAutoRows: [C.GridAutoRowsProperty<T.Length>, "gar"]
  gridAutoFlow: [C.GridAutoFlowProperty, "gaf"]
  gridTemplate: [C.GridTemplateProperty, "gt"]
  gridTemplateAreas: [C.GridTemplateAreasProperty, "gta"]
  gridTemplateColumns: [C.GridTemplateColumnsProperty<T.Length>, "gtc"]
  gridTemplateRows: [C.GridTemplateRowsProperty<T.Length>, "gtr"]
  gridGap: [C.GridGapProperty<T.Length>, "gg"]
  gridColumnGap: [C.GridColumnGapProperty<T.Length>, "gcg"]
  gridRowGap: [C.GridRowGapProperty<T.Length>, "grg"]
}

export type GridParentProps = T.ResponsiveProps<GridParentConfig>

export const gridParentConfig: T.RegistryConfig<GridParentConfig> = {
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
  gridArea: [C.GridAreaProperty, "ga"]
  gridColumn: [C.GridColumnProperty, "gc"]
  gridColumnStart: [C.GridColumnStartProperty, "gcs"]
  gridColumnEnd: [C.GridColumnEndProperty, "gce"]
  gridRow: [C.GridRowProperty, "gr"]
  gridRowStart: [C.GridRowStartProperty, "grs"]
  gridRowEnd: [C.GridRowEndProperty, "gre"]
}

export type GridChildProps = T.ResponsiveProps<GridChildConfig>

export const gridChildConfig: T.RegistryConfig<GridChildConfig> = {
  gridArea: "ga",
  gridColumn: "gc",
  gridColumnStart: "gcs",
  gridColumnEnd: "gce",
  gridRow: "gr",
  gridRowStart: "grs",
  gridRowEnd: "gre"
}
