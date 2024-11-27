/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-[#212121]",
    "text-gray-200",
    "dark:bg-[#212121]",
    "dark:text-gray-200",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark": "0 4px 6px rgba(255, 255, 255, 0.1)",
        "custom-sm-dark": "0 1px 2px 0 rgba(255, 255, 255, 0.1)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        darkbg: "#212121",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
