import { HandCoins, TrendingDown, ChevronRight } from "lucide-react";

export default function TransactionsList() {
  return (
    <div className="bg-white rounded-lg shadow transactions">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">거래 내역</h2>
      </div>
      {[
        {
          id: 1,
          title: "장보기",
          amount: -58000,
          date: "2024-01-15",
          category: "Food",
        },
        {
          id: 2,
          title: "월급",
          amount: 3500000,
          date: "2024-01-14",
          category: "Income",
        },
        {
          id: 3,
          title: "커피",
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
              <p className="font-medium text-gray-800">{transaction.title}</p>
              <p className="text-sm text-gray-500">{transaction.category}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-right mr-4">
              <p
                className={`font-medium ${
                  transaction.amount > 0 ? "text-[#FFB5B5]" : "text-[#B5E5CF]"
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
  );
}
