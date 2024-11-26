import {
  PlusCircle,
  HandCoins,
  TrendingDown,
  Wallet,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">가계부</h1>
          <p className="text-gray-600">
            {new Date().toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#FFB5B5]">
            <div className="flex items-center">
              <div className="p-2 bg-[#FFB5B5] bg-opacity-20 rounded-full">
                <HandCoins className="h-6 w-6 text-[#FFB5B5]" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Income</p>
                <p className="text-2xl font-semibold">₩2,450,000</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#B5E5CF]">
            <div className="flex items-center">
              <div className="p-2 bg-[#B5E5CF] bg-opacity-20 rounded-full">
                <TrendingDown className="h-6 w-6 text-[#B5E5CF]" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Expenses</p>
                <p className="text-2xl font-semibold">₩1,280,000</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#E5B5FF]">
            <div className="flex items-center">
              <div className="p-2 bg-[#E5B5FF] bg-opacity-20 rounded-full">
                <Wallet className="h-6 w-6 text-[#E5B5FF]" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Balance</p>
                <p className="text-2xl font-semibold">₩1,170,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b">
            <div className="flex p-4">
              {["monthly", "weekly", "daily"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium rounded-lg mr-2 ${
                    activeTab === tab
                      ? "bg-[#FFB5B5] bg-opacity-20 text-[#FFB5B5]"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 h-[300px] flex items-center justify-center text-gray-500">
            Chart Area -{" "}
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} View
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Transactions
            </h2>
          </div>
          {[
            {
              id: 1,
              title: "Grocery Shopping",
              amount: -58000,
              date: "2024-01-15",
              category: "Food",
            },
            {
              id: 2,
              title: "Salary Deposit",
              amount: 2450000,
              date: "2024-01-14",
              category: "Income",
            },
            {
              id: 3,
              title: "Coffee Shop",
              amount: -5500,
              date: "2024-01-14",
              category: "Entertainment",
            },
          ].map((transaction) => (
            <div
              key={transaction.id}
              className="px-6 py-4 border-b last:border-b-0 flex items-center justify-between hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.amount > 0
                        ? "bg-[#FFB5B5] bg-opacity-20"
                        : "bg-[#B5E5CF] bg-opacity-20"
                    }`}
                  >
                    {transaction.amount > 0 ? (
                      <HandCoins className="h-5 w-5 text-[#FFB5B5]" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-[#B5E5CF]" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {transaction.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right mr-4">
                  <p
                    className={`font-medium ${
                      transaction.amount > 0
                        ? "text-[#FFB5B5]"
                        : "text-[#B5E5CF]"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}₩
                    {Math.abs(transaction.amount).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 p-4 bg-[#FFB5B5] rounded-full shadow-lg hover:bg-[#ffa5a5] transition-colors"
        aria-label="Add new transaction"
      >
        <PlusCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
