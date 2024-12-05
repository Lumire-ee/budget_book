import React, { useState } from "react";

function TransactionDetailModal({
  transaction,
  onClose,
  onDeleteTransaction,
  onUpdateTransaction,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...transaction });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onUpdateTransaction(formData);
    setIsEditing(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!transaction) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 dark:bg-[#212121] dark:text-gray-300">
        <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
          거래 상세
        </h2>

        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm"
            />
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#F0F0F0] dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-300 outline-none shadow-sm"
            />
          </div>
        ) : (
          <div>
            <p className="mb-2">
              <strong className="text-gray-800 dark:text-gray-400">
                제목 :
              </strong>{" "}
              {transaction.title}
            </p>
            <p className="mb-2">
              <strong className="text-gray-800 dark:text-gray-400">
                금액 :
              </strong>{" "}
              ₩{Math.abs(transaction.amount).toLocaleString()}
            </p>
            <p className="mb-2">
              <strong className="text-gray-800 dark:text-gray-400">
                분류 :
              </strong>{" "}
              {transaction.category}
            </p>
            <p className="mb-2">
              <strong className="text-gray-800 dark:text-gray-400">
                날짜 :
              </strong>{" "}
              {transaction.date}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          {isEditing ? (
            <>
              <button
                className="px-4 py-2 mr-3 bg-gray-500 text-white rounded shadow hover:bg-gray-600 transition"
                onClick={() => setIsEditing(false)}
              >
                취소
              </button>
              <button
                className="px-4 py-2 bg-[#80CFA9] text-white rounded shadow hover:bg-[#66B292] transition"
                onClick={handleSave}
              >
                저장
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 mr-3 bg-[#E57373] text-white rounded shadow hover:bg-[#D35D5D] transition"
                onClick={() => onDeleteTransaction(transaction.id)}
              >
                삭제
              </button>
              <button
                className="px-4 py-2 bg-[#80CFA9] text-white rounded shadow hover:bg-[#66B292] transition"
                onClick={() => setIsEditing(true)}
              >
                수정
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionDetailModal;
