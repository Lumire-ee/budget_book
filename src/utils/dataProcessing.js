export const processData = (transactions, activeTab) => {
  const groupedData = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    let key;

    if (activeTab === "월간") {
      key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    } else if (activeTab === "주간") {
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - date.getDay() + 1);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(endOfWeek.getDate() + 6);

      key = `${startOfWeek.getFullYear()}-${
        startOfWeek.getMonth() + 1
      }-${startOfWeek.getDate()} ~ ${endOfWeek.getFullYear()}-${
        endOfWeek.getMonth() + 1
      }-${endOfWeek.getDate()}`;
    } else if (activeTab === "일간") {
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
        dayNames[date.getDay()]
      }`;
    }

    if (!groupedData[key]) {
      groupedData[key] = { income: 0, expense: 0 };
    }

    if (transaction.amount > 0) {
      groupedData[key].income += transaction.amount;
    } else {
      groupedData[key].expense += Math.abs(transaction.amount);
    }
  });

  return Object.entries(groupedData).map(([key, value]) => ({
    name: key,
    Income: value.income,
    Expense: value.expense,
  }));
};
