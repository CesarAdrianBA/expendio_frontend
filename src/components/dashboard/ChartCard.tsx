"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

 

interface Props {
  nombre: string
  data: Array<{ day: string, sales: number }>
}

export default function ChartCard({
    nombre,
    data
}: Props) {
  return (
    <div className="border rounded-xl p-4 shadow flex flex-col items-center justify-around min-h-[250px] bg-white">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>

          <AreaChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            onContextMenu={(_, e) => e.preventDefault()}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" niceTicks="snap125" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>

    </div>
  )
}