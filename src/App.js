import React, { useState } from "react";
import "./App.css";
import { PlusCircle } from "lucide-react";

import useDarkMode from "./hooks/DarkMode";
import Header from "./components/Header";
import ChartArea from "./components/ChartArea";
import SummaryCards from "./components/SummaryCards";
import TransactionsList from "./components/TransactionsList";

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [activeTab, setActiveTab] = useState("월간");
  return (
    <div className='"bg-gray-100 dark:bg-[#212121] transition-colors duration-500 px-4 sm:px-6"'>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-white dark:bg-[#212121] text-gray-800 transition-colors duration-500">
        <SummaryCards />
        <ChartArea activeTab={activeTab} setActiveTab={setActiveTab} />
        <TransactionsList />
      </main>
      <button
        className="fixed bottom-6 right-6 p-4 bg-[#E4B5FF] rounded-full shadow-lg hover:bg-[#D5A3F5] transition-colors"
        aria-label="Add new transaction"
      >
        <PlusCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default App;
