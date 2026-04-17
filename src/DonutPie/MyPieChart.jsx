import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from "react";
import { InteractionContext } from "../InteractionContext/InteractionContext";

const COLORS = ["#8B5CF6", "#244D3F", "#22C55E"];

const MyPieChart = () => {

    const { interactions } = useContext(InteractionContext);
    const textCount = interactions.filter(i => i.type === "text").length;
    const callCount = interactions.filter(i => i.type === "call").length;
    const videoCount = interactions.filter(i => i.type === "video").length;
    const data = [
        { name: "Text", value: textCount },
        { name: "Call", value: callCount },
        { name: "Video", value: videoCount },
    ];

    const hasData = data.some(d => d.value > 0);

    return (
        <div className="flex flex-col items-center">
            {hasData ? (<PieChart width={300} height={300}>
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
            <Tooltip formatter={(value) => [`Total: ${value}`, ]} />
            <Legend />
            </PieChart>
            ) : (
                <p className="text-gray-400 mt-10"></p>
            )}

            {/* Count summary */}
            <div className="flex gap-6 mt-4 text-sm">
                <span className="text-purple-500 font-semibold">Text: {textCount}</span>
                <span className="text-green-800 font-semibold">Call: {callCount}</span>
                <span className="text-green-500 font-semibold">Video: {videoCount}</span>
            </div>
        </div>
    );
};

export default MyPieChart;