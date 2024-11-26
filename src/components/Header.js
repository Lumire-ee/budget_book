import { SunDim, Moon } from "lucide-react";

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="px-6 py-4 bg-white border-b dark:bg-darkbg border-gray-500 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex justify-start">
          가계부
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {new Date().toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {isDarkMode ? <SunDim /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
}
