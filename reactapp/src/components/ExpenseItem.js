import "./ExpenseItem.css";
var date = new Date();
var today = date.getDate();
function ExpenseItem() {
  return (
    <div className="div">
      <div className="innerdiv">
        <p>The war of worlds</p>
      </div>
      <p>written by me</p>
    </div>
  );
}

export default ExpenseItem;
