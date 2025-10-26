"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Ventas por día";

const chartData = [
  { day: "Lun", ventas: 80 },
  { day: "Mar", ventas: 95 },
  { day: "Mié", ventas: 90 },
  { day: "Jue", ventas: 130 },
  { day: "Vie", ventas: 215 },
];

const chartConfig = {
  desktop: {
    label: "Ventas",
    color: "var(--ft-Blue-700)",
  },
} satisfies ChartConfig;

export function ChartBarSalesDay() {
  return (
    <Card className="border-none shadow-none">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="ventas" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
