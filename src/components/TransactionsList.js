import { HandCoins, TrendingDown, ChevronRight } from "lucide-react";

export default function TransactionsList({
  transactions = [],
  setSelectedTransaction,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="bg-white rounded-lg shadow transactions dark:shadow-custom-dark dark:bg-darkbg ">
      <div className="flex justify-between px-6 py-4 border-b dark:border-gray-600">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
          거래 내역
        </h2>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded bg-white text-gray-800 dark:bg-darkbg dark:text-[#99A1AD] dark:border-gray-600 transition-colors focus:outline-none"
        >
          <option value="date">날짜</option>
          <option value="income">수입</option>
          <option value="expenses">지출</option>
        </select>
      </div>
      {transactions.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          거래 내역이 없습니다.
        </div>
      ) : (
        transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="px-6 py-4 border-b last:border-b-0 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
            onClick={() => setSelectedTransaction(transaction)}
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
                    <HandCoins className="h-5 w-5 text-[#FFB5B5] dark:text-[#E37373]" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-[#B5E5CF] dark:text-[#1C7745]" />
                  )}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-400">
                  {transaction.title}
                </p>
                <p className="text-sm text-gray-400 ">{transaction.category}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-right mr-4">
                <p
                  className={`font-medium ${
                    transaction.amount > 0
                      ? "text-[#FFB5B5] dark:text-[#E37373]"
                      : "text-[#B5E5CF] dark:text-[#1C7745]"
                  }`}
                >
                  ₩{Math.abs(transaction.amount).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {transaction.date}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
