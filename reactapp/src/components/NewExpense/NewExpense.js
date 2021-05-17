import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
  const onsaveHandeller = (data) => {
    const newdata = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(newdata);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onsaveexpensedata={onsaveHandeller}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
