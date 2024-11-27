import React, { useState } from "react";
import { HandCoins, TrendingDown } from "lucide-react";

export default function Modal({ onAddTransaction, onClose }) {
  const [transactionType, setTransactionType] = useState("income");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTypeChange = (type) => {
    setTransactionType(type);
  };

  const handleSubmit = () => {
    const amount =
      transactionType === "income"
        ? Math.abs(parseInt(formData.amount, 10))
        : -Math.abs(parseInt(formData.amount, 10));

    onAddTransaction({ ...formData, amount });
    onClose();
    setFormData({
      title: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
    });
    setTransactionType("income");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-gray-500">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 dark:bg-darkbg">
        <h2 className="text-lg font-semibold mb-4 text-gray-400">내역 추가</h2>

        <div className="flex justify-between mb-4">
          <button
            className={`flex items-center justify-center gap-x-2 w-full py-2 mr-2 rounded-lg ${
              transactionType === "income"
                ? "bg-green-300"
                : "bg-gray-50 dark:bg-gray-300"
            }`}
            onClick={() => handleTypeChange("income")}
          >
            <HandCoins />
            <span>수입</span>
          </button>
          <button
            className={`flex items-center justify-center gap-x-2 w-full py-2 rounded-lg ${
              transactionType === "expense"
                ? "bg-red-300"
                : "bg-gray-50 dark:bg-gray-300"
            }`}
            onClick={() => handleTypeChange("expense")}
          >
            <TrendingDown />
            <span>지출</span>
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="내용"
            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-300 outline-none"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="금액 (₩)"
            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-300 outline-none"
            value={formData.amount}
            onChange={handleInputChange}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
          <input
            type="text"
            name="category"
            placeholder="분류"
            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-300 outline-none"
            value={formData.category}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-300 outline-none"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 mr-3 bg-[#E4B5FF] rounded shadow dark:bg-gray-300 dark:shadow-custom-dark"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#E4B5FF] rounded shadow dark:bg-gray-300 dark:shadow-custom-dark"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
