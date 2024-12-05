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
import { processData } from "../utils/dataProcessing";

export default function ChartArea({
  isDarkMode,
  activeTab,
  setActiveTab,
  transactions,
  setIsModalOpen,
}) {
  const data = processData(transactions, activeTab);

  return (
    <div className="bg-white rounded-lg shadow mb-8 dark:shadow-custom-dark dark:bg-darkbg">
      <div className="border-b dark:border-gray-600">
        <div className="flex p-4">
          {["일간", "주간", "월간"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium rounded-lg mr-2 ${
                activeTab === tab
                  ? "bg-gray-600 bg-opacity-20 text-gray-400"
                  : "text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 h-[300px] flex items-center justify-center text-gray-500">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 10,
                bottom: 10,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis
                width={80}
                tickFormatter={(value) => {
                  if (value === 0) return "0";
                  if (value >= 100000) return `${value / 10000}만원`;
                  if (value >= 10000)
                    return `${(value / 10000).toFixed(1)}만원`;
                  return `${value / 1000}천원`;
                }}
                interval="preserveStartEnd"
                tickCount={5}
              />
              <Tooltip
                cursor={{
                  fill: isDarkMode ? "#3A3A3A" : "#EAEAEA",
                  opacity: 0.5,
                }}
                formatter={(value, name) => {
                  const formattedValue = value.toLocaleString();
                  const translatedName = name === "Income" ? "수입" : "지출";
                  return [formattedValue, translatedName];
                }}
              />
              <Legend
                formatter={(value) => {
                  if (value === "Income") return "수입";
                  if (value === "Expense") return "지출";
                  return value;
                }}
              />
              <Bar
                dataKey="Income"
                fill={isDarkMode ? "#E47373" : "#FFB5B5"}
                activeFill={isDarkMode ? "#D35D5D" : "#FFA7A7"}
              />
              <Bar
                dataKey="Expense"
                fill={isDarkMode ? "#1C7745" : "#B5E5CE"}
                activeFill={isDarkMode ? "#165E35" : "#94D7B5"}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <p>표시할 데이터가 없습니다.</p>
            <button
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
              onClick={() => setIsModalOpen(true)}
            >
              거래 추가하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
