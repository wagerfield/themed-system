import * as C from "csstype"
import * as T from "../types"
import { assign } from "../utils"
import { border, color, edges, size } from "./configs"

export interface BorderConfig {
  border: [C.BorderProperty<T.Length>, "bd"]
  borderX: [C.BorderProperty<T.Length>, "bdx"]
  borderY: [C.BorderProperty<T.Length>, "bdy"]
  borderTop: [C.BorderTopProperty<T.Length>, "bdt"]
  borderRight: [C.BorderRightProperty<T.Length>, "bdr"]
  borderBottom: [C.BorderBottomProperty<T.Length>, "bdb"]
  borderLeft: [C.BorderLeftProperty<T.Length>, "bdl"]
  borderColor: [C.BorderColorProperty, "bdc"]
  borderStyle: [C.BorderStyleProperty, "bds"]
  borderWidth: [C.BorderWidthProperty<T.Length>, "bdw"]
  borderRadius: [C.BorderRadiusProperty<T.Length>, "radius" | "rad"]
}

export type BorderProps = T.ResponsiveProps<BorderConfig>

export const borderConfig: T.RegistryConfig<BorderConfig> = assign(
  edges("border", "bd", border),
  {
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
  }
)
