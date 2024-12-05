function TransactionDetailModal({ transaction, onClose }) {
  if (!transaction) return null; // 선택된 거래가 없으면 모달 숨김

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 dark:bg-[#212121] dark:text-gray-300">
        <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
          거래 상세
        </h2>
        <p className="mb-2">
          <strong className="text-gray-800 dark:text-gray-400">제목:</strong>{" "}
          {transaction.title}
        </p>
        <p className="mb-2">
          <strong className="text-gray-800 dark:text-gray-400">금액:</strong> ₩
          {Math.abs(transaction.amount).toLocaleString()}
        </p>
        <p className="mb-2">
          <strong className="text-gray-800 dark:text-gray-400">
            카테고리:
          </strong>{" "}
          {transaction.category}
        </p>
        <p className="mb-2">
          <strong className="text-gray-800 dark:text-gray-400">날짜:</strong>{" "}
          {transaction.date}
        </p>
        {transaction.note && (
          <p className="mb-2">
            <strong className="text-gray-800 dark:text-gray-400">메모:</strong>{" "}
            {transaction.note}
          </p>
        )}

        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-3 bg-[#424242] text-gray-300 rounded shadow dark:shadow-custom-dark hover:bg-[#555555] hover:text-white transition-all duration-200"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetailModal;
