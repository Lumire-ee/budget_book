import React, { useState } from "react";
import { HandCoins, TrendingDown } from "lucide-react";

export default function Modal({ onAddTransaction, onClose }) {
  const initialFormData = {
    title: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  };

  const [transactionType, setTransactionType] = useState("income");
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      const rawValue = value.replace(/,/g, "");
      if (/^\d*$/.test(rawValue)) {
        setFormData({
          ...formData,
          [name]: rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTypeChange = (type) => {
    setTransactionType(type);
  };

  const handleSubmit = () => {
    const amount =
      transactionType === "income"
        ? Math.abs(parseInt(formData.amount.replace(/,/g, ""), 10))
        : -Math.abs(parseInt(formData.amount.replace(/,/g, ""), 10));

    console.log("transaction added!", { ...formData, amount });

    onAddTransaction({ ...formData, amount, type: transactionType });
    onClose();
    setFormData(initialFormData);
    setTransactionType("income");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-gray-500">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 dark:bg-[#212121]">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-300">
          내역 추가
        </h2>

        <div className="flex justify-between mb-4">
          <button
            className={`flex items-center justify-center gap-x-2 w-full py-2 mr-2 rounded-lg ${
              transactionType === "income"
                ? "bg-[#E57373] text-white"
                : "bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300"
            }`}
            onClick={() => handleTypeChange("income")}
          >
            <HandCoins />
            <span>수입</span>
          </button>
          <button
            className={`flex items-center justify-center gap-x-2 w-full py-2 rounded-lg ${
              transactionType === "expense"
                ? "bg-[#80CFA9] text-white"
                : "bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300"
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
            className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="amount"
            placeholder="금액 (₩)"
            className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            value={formData.amount}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="category"
            placeholder="분류"
            className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            value={formData.category}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm dark:shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 mr-3 bg-[#424242] text-gray-300 rounded shadow dark:shadow-custom-dark hover:bg-[#555555] hover:text-white transition-all duration-200"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="px-4 py-2 bg-[#80CFA9] text-white rounded shadow dark:shadow-custom-dark hover:bg-[#66B292] transition-all duration-200"
            onClick={handleSubmit}
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
