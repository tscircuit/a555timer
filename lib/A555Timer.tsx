import type { StandardFootprint } from "tscircuit"
import type { ReactElement } from "react"
import { DualInlinePackage } from "@tscircuit/footprints"
import type { CommonLayout } from "@tscircuit/react-fiber"

interface Props extends CommonLayout {
  name: string
}

export const A555Timer = ({ name, footprint, ...props }: Props) => (
  <bug
    name={name}
    footprint={footprint ?? <DualInlinePackage pad_count={8} />}
    port_arrangement={{
      left_size: 4,
      right_size: 4,
    }}
    port_labels={{
      "1": "GND",
      "2": "TRIG",
      "3": "OUT",
      "4": "RESET",
      "5": "CTRL",
      "6": "THRES",
      "7": "DISCH",
      "8": "VCC",
    }}
    {...props}
  />
)
