export const processData = (transactions, activeTab) => {
  const groupedData = {};
  const currentDate = new Date();
  const weekAgo = new Date();
  const threeMonthsAgo = new Date();
  const sixMonthsAgo = new Date();
  weekAgo.setDate(currentDate.getDate() - 7);
  threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    let key;

    if (activeTab === "월간") {
      key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    } else if (activeTab === "주간") {
      if (date < sixMonthsAgo) {
        return;
      }
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
      if (date < weekAgo) {
        return;
      }
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${
        dayNames[date.getDay()]
      }`;
    }

    if (!groupedData[key]) {
      groupedData[key] = { income: 0, expense: 0, date };
    }

    if (transaction.amount > 0) {
      groupedData[key].income += transaction.amount;
    } else {
      groupedData[key].expense += Math.abs(transaction.amount);
    }
  });

  return Object.entries(groupedData)
    .map(([key, value]) => ({
      name: key,
      Income: value.income,
      Expense: value.expense,
      date: value.date,
    }))
    .sort((a, b) => a.date - b.date);
};
