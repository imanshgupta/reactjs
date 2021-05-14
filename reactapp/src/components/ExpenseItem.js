import "./ExpenseItem.css";
function ExpenseItem(prop) {
  return (
    <div className="div">
      <div className="date">{prop.date.toString().substring(0, 15)}</div>
      <div className="innerdiv ">
        <p>{prop.reason}</p>
      </div>
      <div className="cost">Rs{prop.price}</div>
    </div>
  );
}

export default ExpenseItem;
