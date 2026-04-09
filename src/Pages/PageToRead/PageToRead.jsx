import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BookContext } from "../../Components/Context/BookProvider";

const TriangleBar = ({ fill, x, y, width, height }) => {
  if (x == null || y == null || width == null || height == null) return null;

  return (
    <polygon
      points={`${x},${y + height} ${x + width / 2},${y} ${x + width},${y + height}`}
      fill={fill}
    />
  );
};

const CustomLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - 5}
      fill="#333"
      textAnchor="middle"
      fontSize="12"
    >
      {value}
    </text>
  );
};

const getColor = (rating) => {
  if (rating >= 4.5) return "#00c49f";
  if (rating >= 3) return "#ffc658";
  return "#ff4d4f";
};

const PageToRead = () => {
  const { stored } = useContext(BookContext);

  const data = stored.map((bk) => ({
    name: bk.bookName,
    page: bk.totalPages,
    rating: bk.rating,
  }));

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h2 className="text-xl font-semibold">
          No data available 📚
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="page" shape={<TriangleBar />}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={getColor(entry.rating)} />
            ))}
            <LabelList content={<CustomLabel />} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;