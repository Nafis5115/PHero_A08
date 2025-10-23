import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Rating = ({ ratings }) => {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 20, left: -10, bottom: 10 }}
        >
          <XAxis
            type="number"
            tickLine={false}
            axisLine={false}
            ticks={[0, 3000, 6000, 9000, 12000]}
          />
          <YAxis
            type="category"
            dataKey="name"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Bar barSize={30} dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rating;
