import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "lucide-react";
import "./App.css";

import useDarkMode from "./hooks/DarkMode";
import Header from "./components/Header";
import ChartArea from "./components/ChartArea";
import SummaryCards from "./components/SummaryCards";
import TransactionsList from "./components/TransactionsList";
import Modal from "./components/Modal";
import TransactionDetailModal from "./components/TransactionDetailModal.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("일간");
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const LOCAL_STORAGE_KEY = "transactions";

  const loadTransactions = () => {
    const storedTransactions = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  };

  const saveTransactions = (transactions) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions));
  };

  useEffect(() => {
    setTransactions(loadTransactions);
  }, []);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const calculaterSummary = () => {
    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    const balance = income - expenses;

    return { income, expenses, balance };
  };

  const { income, expenses, balance } = calculaterSummary();

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      { ...newTransaction, id: uuidv4() },
      ...prevTransactions,
    ]);
  };

  const handleDeleteTransaction = (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;

    console.log("삭제하려는 내역 ID:", id);
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    console.log("삭제 후 배열:", updatedTransactions);
    setTransactions(updatedTransactions);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedTransactions)
    );
    setSelectedTransaction(null);
  };

  const handleUpdateTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
    setSelectedTransaction(null);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className='"bg-gray-100 dark:bg-[#212121] transition-colors duration-500 px-4 sm:px-6"'>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 bg-white dark:bg-[#212121] text-gray-800 transition-colors duration-500">
        <SummaryCards income={income} expenses={expenses} balance={balance} />
        <ChartArea
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          transactions={transactions}
          setIsModalOpen={setIsModalOpen}
        />
        <TransactionsList
          transactions={transactions}
          setSelectedTransaction={setSelectedTransaction}
        />
      </main>
      {isModalOpen && (
        <Modal onAddTransaction={handleAddTransaction} onClose={toggleModal} />
      )}
      {selectedTransaction && (
        <TransactionDetailModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          onDeleteTransaction={handleDeleteTransaction}
          onUpdateTransaction={handleUpdateTransaction}
        />
      )}
      <button
        className="fixed bottom-6 right-6 p-4 bg-[#E4B5FF] dark:bg-[#C792EA] rounded-full shadow-lg hover:bg-[#C792EA] dark:hover:bg-[#b06bd8] transition-colors"
        aria-label="Add new transaction"
        onClick={toggleModal}
      >
        <PlusCircle className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default App;
