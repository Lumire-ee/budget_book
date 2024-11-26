export default function ChartArea({ activeTab, setActiveTab }) {
  return (
    <div className="bg-white rounded-lg shadow mb-8">
      <div className="border-b">
        <div className="flex p-4">
          {["월간", "주간", "일간"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium rounded-lg mr-2 ${
                activeTab === tab
                  ? "bg-[#E4B5FF] bg-opacity-20 text-[#CF9EF0]"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 h-[300px] flex items-center justify-center text-gray-500">
        차트 보기 - {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
      </div>
    </div>
  );
}
