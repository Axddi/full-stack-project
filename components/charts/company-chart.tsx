"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    level: string;
    compensation: number;
  }[];
}

export function CompanyChart({
  data,
}: Props) {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <BarChart data={data}>
          <XAxis dataKey="level" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="compensation"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}