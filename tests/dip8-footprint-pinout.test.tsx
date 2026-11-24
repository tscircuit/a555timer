import { expect, test } from "bun:test"
import { createProjectBuilder } from "@tscircuit/builder"
import { createRoot } from "@tscircuit/react-fiber"
import { A555Timer } from "../lib/A555Timer"

test("maps DIP8 pins to counterclockwise PCB positions", async () => {
  const elements = await createRoot().render(
    <A555Timer name="U1" />,
    createProjectBuilder(),
  )
  const sourcePorts = new Map(
    elements
      .filter((element) => element.type === "source_port")
      .map((port) => [port.source_port_id, port]),
  )
  const pcbPositionsByPin = new Map(
    elements
      .filter((element) => element.type === "pcb_port")
      .map((port) => {
        const sourcePort = sourcePorts.get(port.source_port_id)
        return [sourcePort?.pin_number, port]
      }),
  )
  const expectedPositions = {
    1: { x: -3.76, y: 3.81 },
    2: { x: -3.76, y: 1.27 },
    3: { x: -3.76, y: -1.27 },
    4: { x: -3.76, y: -3.81 },
    5: { x: 3.76, y: -3.81 },
    6: { x: 3.76, y: -1.27 },
    7: { x: 3.76, y: 1.27 },
    8: { x: 3.76, y: 3.81 },
  }

  expect(pcbPositionsByPin.size).toBe(8)
  for (const [pinNumber, expected] of Object.entries(expectedPositions)) {
    const position = pcbPositionsByPin.get(Number(pinNumber))
    expect(position?.x).toBeCloseTo(expected.x)
    expect(position?.y).toBeCloseTo(expected.y)
  }
})
