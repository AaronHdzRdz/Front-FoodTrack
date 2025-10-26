"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Area, CartesianGrid, AreaChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart"

// Datos de ejemplo: ventas por hora (10:00 - 22:00)
const chartData = [
  { hour: "10:00", sales: 40 },
  { hour: "11:00", sales: 70 },
  { hour: "12:00", sales: 140 },
  { hour: "13:00", sales: 200 },
  { hour: "14:00", sales: 170 },
  { hour: "15:00", sales: 120 },
  { hour: "16:00", sales: 60 },
  { hour: "17:00", sales: 80 },
  { hour: "18:00", sales: 120 },
  { hour: "19:00", sales: 220 },
  { hour: "20:00", sales: 260 },
  { hour: "21:00", sales: 240 },
  { hour: "22:00", sales: 180 },
]

const chartConfig = {
  sales: {
    label: "Ventas",
    color: "var(--ft-Blue-700)",
  },
} satisfies ChartConfig

export function ChartLineSalesHour() {
  const gradientId = `gradient-${React.useId().replace(/:/g, "")}`

  return (
    <Card className="border-none shadow-none py-0">
      <CardContent className="px-0">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* Gradiente dinámico único por instancia */}
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-sales)" stopOpacity={0.12} />
                <stop offset="70%" stopColor="var(--color-sales)" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="4 6" />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => String(value)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            <Area
              dataKey="sales"
              type="natural"
              stroke="var(--color-sales)"
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
