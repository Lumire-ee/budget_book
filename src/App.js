import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import "./App.css";

import useDarkMode from "./hooks/DarkMode";
import Header from "./components/Header";
import ChartArea from "./components/ChartArea";
import SummaryCards from "./components/SummaryCards";
import TransactionsList from "./components/TransactionsList";
import Modal from "./components/Modal";

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("월간");
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(income - expenses);
  const [chartData, setChartData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    const amount = parseInt(newTransaction.amount, 10);

    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
    if (amount > 0) setIncome(income + amount);
    else setExpenses(expenses + Math.abs(amount));

    setBalance(balance + amount);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className='"bg-gray-100 dark:bg-[#212121] transition-colors duration-500 px-4 sm:px-6"'>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-white dark:bg-[#212121] text-gray-800 transition-colors duration-500">
        <SummaryCards income={income} expenses={expenses} balance={balance} />
        <ChartArea activeTab={activeTab} setActiveTab={setActiveTab} />
        <TransactionsList transactions={transactions} />
      </main>
      {isModalOpen && (
        <Modal onAddTransaction={handleAddTransaction} onClose={toggleModal} />
      )}
      <button
        className="fixed bottom-6 right-6 p-4 bg-[#E4B5FF] rounded-full shadow-lg hover:bg-[#D5A3F5] transition-colors"
        aria-label="Add new transaction"
        onClick={toggleModal}
      >
        <PlusCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default App;
