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
}) {
  const data = processData(transactions, activeTab);

  return (
    <div className="bg-white rounded-lg shadow mb-8 dark:shadow-custom-dark dark:bg-darkbg">
      <div className="border-b dark:border-gray-600">
        <div className="flex p-4">
          {["월간", "주간", "일간"].map((tab) => (
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
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                cursor={{
                  fill: isDarkMode ? "#3A3A3A" : "#EAEAEA", // 커서 강조 배경색
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
          "표시할 데이터가 없습니다."
        )}
      </div>
    </div>
  );
}
