import type { CommonLayout } from "@tscircuit/react-fiber"

interface Props extends CommonLayout {
  name: string
}

const platedHoleProps = {
  hole_diameter: 0.8,
  outer_diameter: 2,
  inner_diameter: 1.2,
}

const Dip8Footprint = () => (
  <footprint>
    <platedhole {...platedHoleProps} x={-3.76} y={3.81} port_hints={["1"]} />
    <platedhole {...platedHoleProps} x={-3.76} y={1.27} port_hints={["2"]} />
    <platedhole {...platedHoleProps} x={-3.76} y={-1.27} port_hints={["3"]} />
    <platedhole {...platedHoleProps} x={-3.76} y={-3.81} port_hints={["4"]} />
    <platedhole {...platedHoleProps} x={3.76} y={-3.81} port_hints={["5"]} />
    <platedhole {...platedHoleProps} x={3.76} y={-1.27} port_hints={["6"]} />
    <platedhole {...platedHoleProps} x={3.76} y={1.27} port_hints={["7"]} />
    <platedhole {...platedHoleProps} x={3.76} y={3.81} port_hints={["8"]} />
  </footprint>
)
export const A555Timer = ({ name, footprint, ...props }: Props) => (
  <bug
    name={name}
    footprint={footprint ?? <Dip8Footprint />}
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
    {...(props as any)}
  />
)
