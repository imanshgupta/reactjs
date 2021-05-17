import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "DINNER",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "GIFT GIRLFRIEND",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addnewexpense = (data) => {
    const newexpensedata = {
      ...data,
    };
  };
  return (
    <div>
      <NewExpense takenewdata={addnewexpense}> </NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
