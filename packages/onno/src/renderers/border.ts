import * as C from "csstype"
import * as T from "../types"
import { border, color, size } from "./configs"

interface BorderConfig {
  border: [C.BorderProperty<T.Length>, "bd"]
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

export const borderConfig: T.RegistryConfig<BorderConfig> = {
  border: border("bd"),
  borderTop: border("bdt"),
  borderRight: border("bdr"),
  borderBottom: border("bdb"),
  borderLeft: border("bdl"),
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
