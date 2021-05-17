import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onsaveHandeller = (data) => {
    const newdata = {
      ...data,
      id: Math.random().toString(),
    };

    props.takenewdata(newdata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsaveexpensedata={onsaveHandeller}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
