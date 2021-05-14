import ExpenseItem from "./components/ExpenseItem";

function App() {
  var arr = [
    {
      date: new Date(2021, 2, 3),
      reason: "Car insurance",
      price: 1400,
    },
    { date: new Date(2021, 1, 3), reason: "Dinner", price: 500 },
    { date: new Date(2021, 3, 5), reason: "Gift", price: 5000 },
  ];
  return (
    <div>
      <h2>EXPENSE LIST</h2>
      <ExpenseItem
        date={arr[0].date}
        reason={arr[0].reason}
        price={arr[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={arr[1].date}
        reason={arr[1].reason}
        price={arr[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={arr[2].date}
        reason={arr[2].reason}
        price={arr[2].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
