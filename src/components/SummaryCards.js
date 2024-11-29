import { HandCoins, TrendingDown, Wallet } from "lucide-react";

export default function SummaryCard({ income, expenses, balance }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 summarycards">
      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#FFB5B5] dark:border-[#E57373] dark:shadow-custom-dark dark:bg-darkbg ">
        <div className="flex items-center">
          <div className="p-2 bg-[#FFB5B5] bg-opacity-20 rounded-full dark:bg-[#E57373] ">
            <HandCoins className="h-6 w-6 text-[#FFB5B5]" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">총 수입</p>
            <p className="text-2xl font-semibold dark:text-gray-400">
              ₩{Math.abs(income).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#B5E5CF] dark:border-[#1D7745] dark:shadow-custom-dark dark:bg-darkbg">
        <div className="flex items-center">
          <div className="p-2 bg-[#B5E5CF] bg-opacity-20 rounded-full dark:bg-[#1D7745]">
            <TrendingDown className="h-6 w-6 text-[#B5E5CF]" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">총 지출</p>
            <p className="text-2xl font-semibold dark:text-gray-400">
              ₩{Math.abs(expenses).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#E5B5FF] dark:border-[#C792EA] dark:shadow-custom-dark dark:bg-darkbg ">
        <div className="flex items-center">
          <div className="p-2 bg-[#E5B5FF] bg-opacity-20 rounded-full dark:bg-[#C792EA]">
            <Wallet className="h-6 w-6 text-[#E5B5FF]" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">잔고</p>
            <p className="text-2xl font-semibold dark:text-gray-400">
              ₩{Math.abs(balance).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
