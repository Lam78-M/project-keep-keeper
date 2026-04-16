import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Text", value: 40 },
  { name: "Call", value: 30 },
  { name: "Video", value: 30 },
];

const COLORS = ["#8B5CF6", "#244D3F", "#22C55E"];

const MyPieChart = () => {
  return (
    <div className="flex justify-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          paddingAngle={5}
          cornerRadius={8}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MyPieChart;