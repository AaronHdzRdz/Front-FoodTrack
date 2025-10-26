"use client"

import { Pie, PieChart, Cell } from "recharts"
import { useMemo } from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple pie chart"

// Nota: si el llamador no provee datos o el array está vacío, mostramos un mensaje.

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig

export type PieDatum = { name: string; value: number }

export function ChartPieCategory({ data }: { data: PieDatum[] }) {
  // Normalizar datos para que los hooks se llamen siempre en el mismo orden
  const chartDataToUse = data ?? []

  const colors = useMemo(() => {
    const count = chartDataToUse.length
    const hue = 210
    const saturation = 85
    const lightStart = 60
    const lightEnd = 30

    if (count <= 1)
      return [`hsl(${hue} ${saturation}% ${(lightStart + lightEnd) / 2}%)`]

    return Array.from({ length: count }).map((_, i) => {
      const t = i / (count - 1)
      const light = Math.round(lightStart + (lightEnd - lightStart) * t)
      return `hsl(${hue} ${saturation}% ${light}%)`
    })
  }, [chartDataToUse.length])

  const hasData = chartDataToUse.length > 0

  if (!hasData) {
    return (
      <Card className="border-none shadow-none py-0 px-0">
        <CardContent className="flex-1 pb-0 px-0 flex items-center justify-center">
          <div className="text-center text-sm text-muted-foreground">
            No hay datos disponibles para mostrar.
          </div>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="border-none shadow-none py-0 px-0">
      <CardContent className="flex-1 pb-0 px-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartDataToUse} dataKey="value" nameKey="name">
              {chartDataToUse.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
