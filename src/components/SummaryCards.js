import { HandCoins, TrendingDown, Wallet } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 dark:bg-darkbg">
      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#FFB5B5]">
        <div className="flex items-center">
          <div className="p-2 bg-[#FFB5B5] bg-opacity-20 rounded-full">
            <HandCoins className="h-6 w-6 text-[#FFB5B5]" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">총 수익</p>
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
            <p className="text-sm text-gray-500">총 지출</p>
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
            <p className="text-sm text-gray-500">잔고</p>
            <p className="text-2xl font-semibold">₩1,170,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
