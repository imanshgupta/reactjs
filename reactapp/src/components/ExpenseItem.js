import "./ExpenseItem.css";
import DateComp from "./DateComp";
function ExpenseItem(prop) {
  return (
    <div className="div">
      <DateComp className="date" date={prop.date} />
      <div className="innerdiv ">
        <p>{prop.reason}</p>
      </div>
      <div className="cost">Rs{prop.price}</div>
    </div>
  );
}

export default ExpenseItem;
