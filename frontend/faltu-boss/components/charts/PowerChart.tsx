"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const powerData = [
  { time: "00:00", usage: 240 },
  { time: "04:00", usage: 180 },
  { time: "08:00", usage: 450 },
  { time: "12:00", usage: 680 },
  { time: "16:00", usage: 520 },
  { time: "20:00", usage: 390 },
];

export default function PowerChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Power Usage Trend</h2>
        <p className="text-sm text-zinc-400">Today (kWh)</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={powerData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
            <XAxis 
              dataKey="time" 
              stroke="#52525B" 
              fontSize={12}
            />
            <YAxis 
              stroke="#52525B" 
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "#18181B",
                border: "1px solid #3F3F46",
                borderRadius: "8px",
              }}
            />
            <Line 
              type="natural" 
              dataKey="usage" 
              stroke="#22D3EE" 
              strokeWidth={3}
              dot={{ fill: "#22D3EE", r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}