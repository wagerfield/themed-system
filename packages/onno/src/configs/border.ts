import { RegistryConfig } from "../types"
import { assign } from "../utils"
import { border, color, edges, size } from "./common"

interface BorderEdgesConfig {
  border: "bd"
  borderX: "bdx"
  borderY: "bdy"
  borderTop: "bdt"
  borderRight: "bdr"
  borderBottom: "bdb"
  borderLeft: "bdl"
}

interface BorderStyleConfig {
  borderColor: "bdc"
  borderStyle: "bds"
  borderWidth: "bdw"
  borderRadius: "radius" | "rad"
}

export type BorderConfig = BorderEdgesConfig & BorderStyleConfig

export const borderConfig = assign<
  RegistryConfig<BorderEdgesConfig>,
  RegistryConfig<BorderStyleConfig>
>(edges("border", "bd", border), {
  borderColor: color("bdc"),
  borderStyle: {
    propsKeys: "bds",
    themeKeys: "borderStyles"
  },
  borderWidth: {
    propsKeys: "bdw",
    themeKeys: "borderWidths"
  },
  borderRadius: size({
    propsKeys: ["radius", "rad"],
    themeKeys: ["borderRadii", "sizes"]
  })
})
